import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CancelAlertService } from 'src/managers/CancelAlertService';
import { UserLoginUseCase } from 'src/app/use-cases/user-login.use-case';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private userLoginUseCase: UserLoginUseCase,
    private alert: CancelAlertService
  ) {}

  ngOnInit() { }

  async onLoginButtonPressed() {
    const result = await this.userLoginUseCase.performLogin(this.email, this.password);

    if (result.success) {
      this.alert.showAlert(
        'Login exitoso',
        'Has iniciado sesión correctamente.',
        () => {
          this.router.navigate(['/splash']);
        }
      );
    } else {
      this.alert.showAlert(
        'Error',
        result.message,
        () => { }
      );
    }
  }

  onRegisterButtonPressed() {
    this.router.navigate(['/register']);
  }
}

