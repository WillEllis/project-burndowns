import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { mapValues } from 'lodash';
import { AuthService } from 'src/app/auth/auth.service';
import { UserModel } from 'src/app/auth/user-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
  ) {}

  ngOnInit() {
    this.authService.doClearErrorMessage();
    this.buildSchema();
    this.form = this.schema.buildForm({ rememberMe: true });
  }

  get fields() {
    return UserModel.fields;
  }

  get loading() {
    return this.authService.loading;
  }

  get errorStateMatcher() {
    return {
      isErrorState: (control, form) => {
        const isSubmitted = form && form.submitted;
        return (
          !!this.errorMessage ||
          !!(
            control &&
            control.invalid &&
            (control.dirty ||
              control.touched ||
              isSubmitted)
          )
        );
      },
    };
  }

  get errorMessage() {
    return this.authService.errorMessage;
  }

  async signin() {
    if (!this.form.valid) {
      return;
    }

    const { email, password, rememberMe } = this.form.value;

    await this.authService.doSigninWithEmailAndPassword(
      email,
      password,
      rememberMe,
    );
  }

  async doSigninWithFacebook() {
    if (this.loading) {
      return;
    }

    return this.authService.doSigninSocial(
      'facebook',
      this.form.value.rememberMe,
    );
  }

  async doSigninWithTwitter() {
    if (this.loading) {
      return;
    }

    return this.authService.doSigninSocial(
      'twitter',
      this.form.value.rememberMe,
    );
  }

  async doSigninWithGoogle() {
    if (this.loading) {
      return;
    }

    return this.authService.doSigninSocial(
      'google',
      this.form.value.rememberMe,
    );
  }

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.email,
        this.fields.password,
        this.fields.rememberMe,
      ],
      this.formBuilder,
    );
  }
}
