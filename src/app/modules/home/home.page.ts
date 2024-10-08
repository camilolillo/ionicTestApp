import { Component } from '@angular/core';
import { StorageService } from 'src/managers/StorageService';
import { Router } from '@angular/router';
import { CancelAlertService } from 'src/managers/CancelAlertService';
import { RickAndMortyService } from 'src/managers/rickAndMortyService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {  

  user: any

  constructor(
    private router: Router, 
    private storageService: StorageService,
    private cancelAlertService: CancelAlertService,
    private rickAndMortyService: RickAndMortyService) {}

  async ngOnInit() { 
    this.loadData()
  }

  async loadData() {
    this.user = await this.storageService.get('user');
    if (!this.user) {
      console.log('No se encontraron datos del usuario.')
    } 
    this.loadCharacters()
  }

  async onSignOutButtonPressed() {
    this.cancelAlertService.showAlert(
      'Cerrar sesión',                         
      '¿Estás seguro de que quieres cerrar sesión?',  
      async () => {
        await this.storageService.clear();     
        this.router.navigate(['/splash']);     
      },
      () => {
        console.log('Sesión no cerrada');
      }
    )
  }

  loadCharacters() {
    this.rickAndMortyService.getCharacters().subscribe(
      (response) => {
        console.log('Personajes obtenidos:', response);
      },
      (error) => {
        console.error('Error al obtener los personajes:', error);
      }
    );
  }

}
