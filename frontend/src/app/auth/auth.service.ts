import { Injectable } from '@angular/core';
import { AuthApi } from 'src/app/auth/auth.api';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.service';
import { i18n } from 'src/i18n';
import { ErrorService } from 'src/app/shared/error/error.service';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { PermissionChecker } from 'src/app/auth/permission-checker';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  initializedSubject = new ReplaySubject<boolean>(1);
  authenticationUser = null;
  currentUser = null;
  loadingEmailConfirmation = false;
  loadingPasswordReset = false;
  loadingUpdateProfile = false;
  loading = false;
  errorMessage = null;

  constructor(
    private router: Router,
    private snackbar: Snackbar,
    private errorService: ErrorService,
  ) {}

  hasPermission(permission) {
    if (!this.isSignedIn) {
      return false;
    }

    return new PermissionChecker(this.currentUser).match(
      permission,
    );
  }

  get initialized() {
    return this.initializedSubject
      .pipe(take(1))
      .toPromise();
  }

  get currentUserEmail() {
    return this.currentUser ? this.currentUser.email : null;
  }

  get currentUserFullName() {
    return this.currentUser
      ? this.currentUser.fullName
      : '';
  }

  get isSignedIn() {
    return !!this.currentUser && !!this.currentUser.id;
  }

  get roles() {
    return this.currentUser
      ? this.currentUser.roles || []
      : [];
  }

  get isEmptyPermissions() {
    const roles = this.roles;
    return !roles || !roles.length;
  }

  get currentUserNameOrEmailPrefix() {
    if (!this.currentUser) {
      return '';
    }

    if (
      this.currentUserFullName &&
      this.currentUserFullName.length < 25
    ) {
      return this.currentUserFullName;
    }

    if (this.currentUser.firstName) {
      return this.currentUser.firstName;
    }

    return this.currentUser.email.split('@')[0];
  }

  get currentUserAvatar() {
    if (
      !this.currentUser ||
      !this.currentUser.avatars ||
      !this.currentUser.avatars.length ||
      !this.currentUser.avatars[0].publicUrl
    ) {
      return null;
    }

    return this.currentUser.avatars[0].publicUrl;
  }

  doInit() {
    AuthApi.init();

    const unsubscribe = AuthApi.onAuthStateChanged(
      (authenticationUser) => {
        this.doSigninFromAuthChange(authenticationUser);
        unsubscribe();
      },
      (error) => {
        console.error(error);
        this.authenticationUser = null;
        this.currentUser = null;
        this.initializedSubject.next(true);
      },
    );
  }

  doClearErrorMessage() {
    this.errorMessage = null;
  }

  async doSendEmailConfirmation() {
    try {
      this.loadingEmailConfirmation = true;

      await AuthApi.sendEmailVerification(
        this.authenticationUser,
      );

      this.snackbar.success(
        i18n('auth.verificationEmailSuccess'),
      );

      this.loadingEmailConfirmation = false;
    } catch (error) {
      this.errorService.handle(error);
      this.loadingEmailConfirmation = false;
    }
  }

  async doSendPasswordResetEmail(email) {
    try {
      this.loadingPasswordReset = true;
      await AuthApi.sendPasswordResetEmail(email);
      this.snackbar.success(
        i18n('auth.passwordResetSuccess'),
      );
      this.loadingPasswordReset = false;
    } catch (error) {
      this.errorService.handle(error);
      this.loadingPasswordReset = false;
    }
  }

  async doSigninSocial(provider, rememberMe) {
    try {
      this.errorMessage = null;
      this.loading = true;

      let authenticationUser = null;
      let currentUser = null;

      const credentials = await AuthApi.signinWithSocial(
        provider,
        rememberMe,
      );

      if (credentials && credentials.user) {
        authenticationUser = credentials.user;
        currentUser = await AuthApi.fetchMe();
        currentUser.emailVerified =
          authenticationUser.emailVerified;
      }

      // in background
      AuthApi.reauthenticateWithStorageToken();

      this.authenticationUser = authenticationUser || null;
      this.currentUser = currentUser || null;
      this.errorMessage = null;
      this.loading = false;
      this.router.navigate(['']);
    } catch (error) {
      await AuthApi.signout();
      this.errorService.handle(error);
      this.authenticationUser = null;
      this.currentUser = null;
      this.loading = false;
    }
  }

  async doRegisterEmailAndPassword(email, password) {
    try {
      this.errorMessage = null;
      this.loading = true;

      const authenticationUser = await AuthApi.registerWithEmailAndPassword(
        email,
        password,
      );

      const currentUser = await AuthApi.fetchMe();

      currentUser.emailVerified =
        authenticationUser.emailVerified;

      // in background
      AuthApi.reauthenticateWithStorageToken();

      this.authenticationUser = authenticationUser || null;
      this.currentUser = currentUser || null;
      this.errorMessage = null;
      this.loading = false;
      this.router.navigate(['']);
    } catch (error) {
      await AuthApi.signout();

      if (this.errorService.errorCode(error) !== 400) {
        this.errorService.handle(error);
      }

      this.authenticationUser = null;
      this.currentUser = null;
      this.loading = false;
      this.errorMessage = this.errorService.selectMessage(
        error,
      );
    }
  }

  async doSigninWithEmailAndPassword(
    email,
    password,
    rememberMe,
  ) {
    try {
      this.errorMessage = null;
      this.loading = true;

      let authenticationUser = null;
      let currentUser = null;

      const credentials = await AuthApi.signinWithEmailAndPassword(
        email,
        password,
        rememberMe,
      );

      if (credentials && credentials.user) {
        authenticationUser = credentials.user;
        currentUser = await AuthApi.fetchMe();
        currentUser.emailVerified =
          authenticationUser.emailVerified;
      }

      // in background
      AuthApi.reauthenticateWithStorageToken();

      this.authenticationUser = authenticationUser || null;
      this.currentUser = currentUser || null;
      this.errorMessage = null;
      this.loading = false;
      this.router.navigate(['']);
    } catch (error) {
      await AuthApi.signout();

      if (this.errorService.errorCode(error) !== 400) {
        this.errorService.handle(error);
      }

      this.authenticationUser = null;
      this.currentUser = null;
      this.errorMessage =
        this.errorService.selectMessage(error) || null;
      this.loading = false;
    }
  }

  async doSignout() {
    try {
      this.errorMessage = null;
      this.loading = true;
      await AuthApi.signout();
      this.authenticationUser = null;
      this.currentUser = null;
      this.errorMessage = null;
      this.loading = false;
      this.router.navigate(['/auth/signin']);
    } catch (error) {
      this.errorService.handle(error);
      this.authenticationUser = null;
      this.currentUser = null;
      this.errorMessage = null;
      this.loading = false;
    }
  }

  async doSigninFromAuthChange(authenticationUser) {
    try {
      let currentUser = null;

      if (authenticationUser) {
        currentUser = await AuthApi.fetchMe();

        // in background
        AuthApi.reauthenticateWithStorageToken();

        currentUser.emailVerified =
          authenticationUser.emailVerified;
      }

      this.authenticationUser = authenticationUser || null;
      this.currentUser = currentUser || null;
      this.initializedSubject.next(true);
    } catch (error) {
      AuthApi.signout();
      this.router.navigate(['/auth/signin']);
      this.errorService.handle(error);
      this.authenticationUser = null;
      this.currentUser = null;
      this.initializedSubject.next(true);
    }
  }

  async doRefreshCurrentUser() {
    try {
      const authenticationUser = this.authenticationUser;
      this.currentUser = await AuthApi.fetchMe();
      this.currentUser.emailVerified =
        authenticationUser.emailVerified;

      // in background
      AuthApi.reauthenticateWithStorageToken();
    } catch (error) {
      AuthApi.signout();
      this.errorService.handle(error);
    }
  }

  async doUpdateProfile(
    firstName,
    lastName,
    phoneNumber,
    avatars,
  ) {
    try {
      this.loadingUpdateProfile = true;

      await AuthApi.updateProfile(
        firstName,
        lastName,
        phoneNumber,
        avatars,
      );

      this.loadingUpdateProfile = false;
      await this.doRefreshCurrentUser();
      this.snackbar.success(i18n('auth.profile.success'));
      this.router.navigate(['']);
    } catch (error) {
      this.errorService.handle(error);
      this.loadingUpdateProfile = false;
    }
  }
}
