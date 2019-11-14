import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OpenService } from '@core/services/open.service';
import { AUTH_CONFIG, DefaultConfig } from '@auth/auth.options';
import { AuthService } from '@auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required]],
  });

  constructor(
    private openService: OpenService,
    private formBuilder: FormBuilder,
    @Inject(AUTH_CONFIG) private config: DefaultConfig,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  get count() {
    return this.openService.count;
  }

  add() {
    this.openService.add();
  }

  onSubmit() {
    this.authService
      .login(this.loginForm.value)
      .subscribe(response => {
        console.log(response);
      });
  }

}
