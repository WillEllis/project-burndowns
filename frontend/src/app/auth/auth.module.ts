import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  AuthRoutingModule,
  routedComponents,
} from 'src/app/auth/auth-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  imports: [SharedModule, AuthRoutingModule, LayoutModule],
  declarations: [...routedComponents],
  providers: [],
})
export class AuthModule {}
