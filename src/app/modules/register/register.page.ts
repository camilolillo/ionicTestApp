import { Component, OnInit } from '@angular/core';
import { SessionManager } from 'src/managers/SessionManager';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage {

  email: string = '';
  password: string = '';

  constructor(
    private sessionManager: SessionManager, 
    private router: Router
  ) { }

  async onRegisterButtonPressed() {
    try {
      const userCredential = await this.sessionManager.registerUserWith(
        this.email,
        this.password
      );

      const user = userCredential.user;

      if (user) {
        alert(`¡Registro exitoso! Bienvenido, ${user.email}`);
      } else {
        alert('¡Registro exitoso!');
      }

      this.router.navigate(['/home']);
    } catch (error: any) {
      console.error('Error al registrar usuario:', error);

      switch (error.code) {
        case 'auth/email-already-in-use':
          alert(
            'Este correo electrónico ya está en uso. Por favor, utiliza otro o inicia sesión.'
          );
          break;
        case 'auth/invalid-email':
          alert('La dirección de correo electrónico no es válida.');
          break;
        case 'auth/weak-password':
          alert(
            'La contraseña es demasiado débil. Debe tener al menos 6 caracteres.'
          );
          break;
        default:
          alert('Ocurrió un error al registrar el usuario: ' + error.message);
          break;
      }
    }
  }
  
}


