import { Component, OnInit } from '@angular/core';
import { StorageService

 } from 'src/managers/StorageService';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userEmail: string = '';
  userName: string = '';
  userPhotoURL: string = 'assets/default-avatar.png'; // Imagen por defecto

  constructor(private storageService: StorageService) { }

  async ngOnInit() {
    // Llamar al StorageService para obtener los datos del usuario
    const user = await this.storageService.get('user');

    if (user) {
      // Asignar los datos del usuario a las variables
      this.userEmail = user.email || 'Correo no disponible';
      this.userName = user.displayName || '';
      this.userPhotoURL = user.photoURL || 'assets/default-avatar.png';
    }
  }
}
