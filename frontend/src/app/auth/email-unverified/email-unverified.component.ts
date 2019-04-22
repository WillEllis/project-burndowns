import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { UserModel } from 'src/app/auth/user-model';

@Component({
  selector: 'app-email-unverified',
  templateUrl: './email-unverified.component.html',
})
export class EmailUnverifiedComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  async signout() {
    await this.authService.doSignout();
  }

  get loading() {
    return this.authService.loadingEmailConfirmation;
  }

  get email() {
    return this.authService.currentUserEmail;
  }

  async sendEmailConfirmation() {
    await this.authService.doSendEmailConfirmation();
  }
}
