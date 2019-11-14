import { NgModule, ModuleWithProviders } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SharedModule } from '@shared/shared.module';
import { AUTH_CONFIG, DEFAULT_CONFIG } from './auth.options';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule {

  static forRoot(option?: any): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        { provide: AUTH_CONFIG, useValue: DEFAULT_CONFIG },
        AuthService,
      ]
    };
  }

}
