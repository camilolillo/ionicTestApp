import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManager } from 'src/managers/SessionManager';
import { StorageService } from 'src/managers/StorageService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router, 
    private sessionManager: SessionManager,
    private storageService: StorageService
  ) { }

    email: string = '';
    user: string = '';
    password: string = '';

  ngOnInit() { }

  async onLoginButtonPressed() {

    try {
      const userCredential = await this.sessionManager.loginWith(this.email, this.password)
      const user = userCredential.user
      if (user) {
        console.log('Usuario autenticado:', user);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error')
    }
  }

  onRegisterButtonPressed() {
    this.router.navigate(['/register']);
  }

}
