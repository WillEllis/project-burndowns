import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from 'src/app/auth/signin/signin.component';
import { UnauthGuard } from 'src/app/auth/unauth.guard';
import { SignupComponent } from 'src/app/auth/signup/signup.component';
import { ForgotPasswordComponent } from 'src/app/auth/forgot-password/forgot-password.component';
import { EmptyPermissionsComponent } from 'src/app/auth/empty-permissions/empty-permissions.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { NotEmptyPermissionsGuard } from 'src/app/auth/empty-permissions/not-empty-permissions.guard';
import { EmailAlreadyVerifiedGuard } from 'src/app/auth/email-unverified/email-already-verified.guard';
import { EmailUnverifiedComponent } from 'src/app/auth/email-unverified/email-unverified.component';
import { EditProfileComponent } from 'src/app/auth/edit-profile/edit-profile.component';
import { LayoutComponent } from 'src/app/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signin',
        component: SigninComponent,
        canActivate: [UnauthGuard],
      },
      {
        path: 'signup',
        component: SignupComponent,
        canActivate: [UnauthGuard],
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [UnauthGuard],
      },
      {
        path: 'empty-permissions',
        component: EmptyPermissionsComponent,
        canActivate: [AuthGuard, NotEmptyPermissionsGuard],
      },
      {
        path: 'email-unverified',
        component: EmailUnverifiedComponent,
        canActivate: [AuthGuard, EmailAlreadyVerifiedGuard],
      },
      {
        path: 'profile',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: EditProfileComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}

export const routedComponents = [
  SigninComponent,
  SignupComponent,
  ForgotPasswordComponent,
  EmptyPermissionsComponent,
  EmailUnverifiedComponent,
  EditProfileComponent,
];
