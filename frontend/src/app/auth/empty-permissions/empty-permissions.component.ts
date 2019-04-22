import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-empty-permissions',
  templateUrl: './empty-permissions.component.html',
})
export class EmptyPermissionsComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}

  async signout() {
    await this.authService.doSignout();
  }
}
