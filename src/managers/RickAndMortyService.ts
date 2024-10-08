import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class RickAndMortyService {
  private baseUrl = environment.apiBaseUrl;
  private endpoints = environment.apiEndpoints;

  constructor(private http: HttpClient) {}

  getCharacters() {
    const url = `${this.baseUrl}${this.endpoints.character}`;
    return this.http.get(url);
  }

  getLocations() {
    const url = `${this.baseUrl}${this.endpoints.location}`;
    return this.http.get(url);
  }

  getEpisodes() {
    const url = `${this.baseUrl}${this.endpoints.episode}`;
    return this.http.get(url);
  }
}