import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/managers/StorageService';
import { UserUpdateUseCase } from 'src/app/use-cases/user-update.use-case';
import { CancelAlertService } from 'src/managers/CancelAlertService';
import { ActionSheetController } from '@ionic/angular';
import { ImageService } from 'src/managers/image-service';
import { UploadUserImageUseCase } from 'src/app/use-cases/upload-user-image.use-case';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userEmail: string = '';
  userName: string = '';
  userPhotoURL: string = 'assets/default-avatar.png';

  constructor(
    private storageService: StorageService,
    private userUpdateUseCase: UserUpdateUseCase,
    private alert: CancelAlertService,
    private actionSheetController: ActionSheetController,
    private imageService: ImageService, // Servicio para obtener imágenes
    private uploadUserImageUseCase: UploadUserImageUseCase // Caso de uso para subir la imagen
  ) { }

  async ngOnInit() {
    const user = await this.storageService.get('user');

    if (user) {
      this.userEmail = user.email && user.email.trim() !== '' ? user.email : 'Correo no disponible';
      this.userName = user.displayName && user.displayName.trim() !== '' ? user.displayName : 'Nombre no disponible';
      this.userPhotoURL = user.photoURL && user.photoURL.trim() !== '' ? user.photoURL : 'assets/default-avatar.png';
    }
  }

  async onUpdateButtonPressed() {
    const result = await this.userUpdateUseCase.performUserUpdate(this.userName);

    if (result.success) {
      this.alert.showAlert(
        'Actualización Exitosa',
        'Tu perfil ha sido actualizado correctamente.',
        () => { }
      );
    } else {
      this.alert.showAlert(
        'Error',
        result.message,
        () => { }
      );
    }
  }

  async onProfileImagePressed() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Selecciona una opción',
      buttons: [
        {
          text: 'Cámara',
          icon: 'camera',
          handler: async () => {
            const imageUrl = await this.imageService.getImageFromCamera();
            if (imageUrl) {
              await this.uploadAndSetProfileImage(imageUrl);
            }
          }
        },
        {
          text: 'Imágenes',
          icon: 'image',
          handler: async () => {
            const imageUrl = await this.imageService.getImageFromGallery();
            if (imageUrl) {
              await this.uploadAndSetProfileImage(imageUrl);
            }
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    await actionSheet.present();
  }

  private async uploadAndSetProfileImage(imageUrl: string) {
    const uploadResult = await this.uploadUserImageUseCase.UploadUserImage(imageUrl);

    if (uploadResult.success) {
      this.alert.showAlert(
        'Imagen Actualizada',
        'Tu imagen de perfil ha sido actualizada con éxito.',
        () => {
          this.userPhotoURL = imageUrl; // Actualiza la URL de la imagen del perfil
        }
      );
    } else {
      this.alert.showAlert(
        'Error',
        uploadResult.message,
        () => { }
      );
    }
  }
}
