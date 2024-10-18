import { Component } from '@angular/core';
import { RickAndMortyService } from 'src/managers/RickAndMortyService';
import { Character } from 'src/app/model/rickAndMortyCharacter.model';

@Component({
  selector: 'app-characters',
  templateUrl: 'characters.page.html',
  styleUrls: ['characters.page.scss'],
})
export class CharactersPage {
  characters: Character[] = [];

  constructor(
    private rickAndMortyService: RickAndMortyService
  ) {}

  async ionViewDidEnter() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.rickAndMortyService.getCharacters().subscribe({
      next: (response) => {
        this.characters = response.results;
      },
      error: (error) => {
        console.error('Error al obtener los personajes:', error);
      }
    });
  }

}
