import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard
  implements CanActivate, CanActivateChild {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  public canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) {
    return this.canActivate(childRoute, state);
  }

  public canLoad(route: Route) {
    return this.canActivate(null, null);
  }

  public async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) {
    await this.auth.initialized;

    if (!this.auth.isSignedIn) {
      this.router.navigate(['/auth/signin']);
      return false;
    }

    if (
      !this.nextEquals(next, 'email-unverified') &&
      !this.auth.currentUser.emailVerified
    ) {
      this.router.navigate(['/auth/email-unverified']);
      return false;
    }

    if (
      !this.nextEquals(next, 'empty-permissions') &&
      this.auth.currentUser.emailVerified &&
      !this.auth.roles.length
    ) {
      this.router.navigate(['/auth/empty-permissions']);
      return false;
    }

    return true;
  }

  private nextEquals(
    next: ActivatedRouteSnapshot,
    path: string,
  ) {
    if (!next || !next.url || !next.url[0]) {
      return false;
    }

    return next.url
      .map((u) => u.path)
      .find((p) => p.includes(path));
  }
}
