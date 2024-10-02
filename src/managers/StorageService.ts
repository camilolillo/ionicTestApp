import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'  // Esto asegura que el servicio esté disponible en toda la aplicación
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  // Inicialización del almacenamiento
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Método para guardar un valor con una clave
  public async set(key: string, value: any): Promise<any> {
    if (!this._storage) {
      await this.init();  // Si el almacenamiento no ha sido inicializado, lo inicializa
    }
    return this._storage?.set(key, value);
  }

  // Método para obtener un valor por clave
  public async get(key: string): Promise<any> {
    if (!this._storage) {
      await this.init();  // Si el almacenamiento no ha sido inicializado, lo inicializa
    }
    return this._storage?.get(key);
  }

  // Método para eliminar un valor por clave
  public async remove(key: string): Promise<any> {
    if (!this._storage) {
      await this.init();  // Si el almacenamiento no ha sido inicializado, lo inicializa
    }
    return this._storage?.remove(key);
  }

  // Método para limpiar todo el almacenamiento
  public async clear(): Promise<void> {
    if (!this._storage) {
      await this.init();  // Si el almacenamiento no ha sido inicializado, lo inicializa
    }
    return this._storage?.clear();
  }
}
