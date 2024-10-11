import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/app/model/api-response.model';
import { Character } from 'src/app/model/rickAndMortyCharacter.model';

@Injectable({
  providedIn: 'root',
})

export class RickAndMortyService {
  private baseUrl = environment.apiBaseUrl;
  private endpoints = environment.apiEndpoints;

  constructor(private http: HttpClient) {}

  getCharacters() {
    const url = `${this.baseUrl}${this.endpoints.character}`;
    return this.http.get<ApiResponse<Character>>(url)
  }
  
}