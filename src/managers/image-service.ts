import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class ImageService {

  constructor() {}

  // Método para obtener una imagen desde la cámara
  async getImageFromCamera(): Promise<string> {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      return image.dataUrl;
    } catch (error) {
      console.error('Error al obtener la imagen de la cámara:', error);
      return "";
    }
  }

  // Método para obtener una imagen desde la galería
  async getImageFromGallery(): Promise<string> {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
      });

      return image.dataUrl;
    } catch (error) {
      console.error('Error al obtener la imagen de la galería:', error);
      return "";
    }
  }
}
