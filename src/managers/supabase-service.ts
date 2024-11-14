import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseAnonKey);
  }

  // Método para subir una imagen en formato base64
  async uploadImage(path: string, base64Data: string): Promise<string | null> {
    try {
      // Convertir la imagen en base64 a Blob
      const base64Response = await fetch(base64Data);
      const blob = await base64Response.blob();

      // Crear un archivo Blob con el nombre deseado
      const file = new File([blob], 'profile-image.jpg', { type: blob.type });

      // Subir el archivo a Supabase Storage
      const { data, error } = await this.supabase.storage
        .from('ionic-test-user-images') // Nombre correcto del bucket
        .upload(path, file);

      if (error) {
        console.error('Error uploading image:', error.message);
        return null;
      }
      return data?.path || null;
    } catch (error) {
      console.error('Error processing image upload:', error);
      return null;
    }
  }

  // Método para obtener la URL pública de una imagen
  getPublicUrl(path: string): string | null {
    const { data } = this.supabase.storage
      .from('ionic-test-user-images') // Nombre correcto del bucket
      .getPublicUrl(path);
    return data?.publicUrl || null;
  }
}
