import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
})
export class MenuUserComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  get currentUserNameOrEmailPrefix() {
    return this.authService.currentUserNameOrEmailPrefix;
  }

  get currentUserAvatar() {
    return this.authService.currentUserAvatar;
  }

  doSignout() {
    return this.authService.doSignout();
  }
}
