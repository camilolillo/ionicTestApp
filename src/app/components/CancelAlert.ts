import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  template: ''
})
export class CancelAlert {

  constructor(private alertController: AlertController) {}

  async showAlert(header: string, message: string, onConfirm: () => void, onCancel?: () => void) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            if (onCancel) {
              onCancel()
            }
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            onConfirm()
          }
        }
      ]
    })

    await alert.present()
  }
}
