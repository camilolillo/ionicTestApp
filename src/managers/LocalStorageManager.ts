import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  // Inicializar el almacenamiento
  async init() {
    this._storage = await this.storage.create();
  }

  // Guardar un valor con una llave
  async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  // Obtener un valor usando una llave
  async get(key: string): Promise<any> {
    return await this._storage?.get(key);
  }

  // Eliminar un valor usando una llave
  async remove(key: string) {
    await this._storage?.remove(key);
  }
}