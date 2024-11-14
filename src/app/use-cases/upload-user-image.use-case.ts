import { Injectable } from '@angular/core';
import { StorageService } from 'src/managers/StorageService';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { SupabaseService } from 'src/managers/supabase-service'; // Importa el servicio de Supabase

@Injectable({
  providedIn: 'root',
})
export class UploadUserImageUseCase {

  constructor(
    private storageService: StorageService,
    private db: AngularFireDatabase, // Acceso a Realtime Database
    private supabaseService: SupabaseService // Cliente de Supabase
  ) {}

  async UploadUserImage(imageUrl: string): Promise<{ success: boolean, message: string }> {
    try {
      // Obtiene el usuario almacenado localmente desde StorageService
      const user = await this.storageService.get('user');

      if (user && user.uid) {
        const uid = user.uid;

        // Define la ruta de almacenamiento en Supabase Storage
        const path = `Users/${uid}/profile-image.jpg`;

        // Subida a Supabase Storage directamente
        const uploadResponse = await this.supabaseService.uploadImage(path, imageUrl);

        if (!uploadResponse) {
          return { success: false, message: 'Error al subir la imagen a Supabase' };
        }

        // Obtener URL pública desde Supabase
        const downloadURL = this.supabaseService.getPublicUrl(path);

        // Actualiza el nodo del usuario en Realtime Database con la nueva URL de la imagen
        await this.db.object(`users/${uid}`).update({ photoURL: downloadURL });

        // Actualiza el campo photoURL del usuario en StorageService
        user.photoURL = downloadURL;
        await this.storageService.set('user', user);

        // Guarda la URL de la imagen también en el StorageService bajo la clave "UserPhotoURL"
        await this.storageService.set('UserPhotoURL', downloadURL);

        return { success: true, message: 'Imagen de usuario actualizada con éxito.' };

      } else {
        return { success: false, message: 'No se encontró el UID del usuario.' };
      }

    } catch (error) {
      return { success: false, message: `Error al subir la imagen: ${error.message}` };
    }
  }
}
