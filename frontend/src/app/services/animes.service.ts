import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from '../models/animes';
import { Character } from '../models/characters';
import { Studio } from '../models/studios';

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  endpoint: string = "http://localhost:8080/animes";

  endpointStudio: string = "http://localhost:8080/studios";

  endpointCharacter: string = "http://localhost:8080/characters";

  constructor(private httpClient: HttpClient) { }

  getAnimes(): Observable <Anime[]> {
    return this.httpClient.get<Anime[]>(this.endpoint);
  }

  getStudios(): Observable <Studio[]> {
    return this.httpClient.get<Studio[]>(this.endpointStudio);
  }

  getCharacters(): Observable <Character[]> {
    return this.httpClient.get<Character[]>(this.endpointCharacter);
  }

  getAnimeById(id_anime: number): Observable <Anime> {
    return this.httpClient.get<Anime>(this.endpoint + "/" + id_anime);
  }

  getStudioById(id_studio: number): Observable <Studio> {
    return this.httpClient.get<Studio>(this.endpointStudio + "/" + id_studio);
  }

  getCharacterById(id_character: number): Observable <Character> {
    return this.httpClient.get<Character>(this.endpointCharacter + "/" + id_character);
  }

  createAnime(anime: Anime): Observable <Anime> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("title", anime.title);
    bodyEncoded.append("studio", anime.id_studio.toString());
    bodyEncoded.append("year", anime.year.toString());
    bodyEncoded.append("image", anime.image);
    const body = bodyEncoded.toString();

    return this.httpClient.post<Anime>(this.endpoint, body, httpOptionsUsingUrlEncoded);
  }

  createStudio(studio: Studio): Observable <Studio> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("studioName", studio.studioName);
    bodyEncoded.append("hq", studio.hq);
    bodyEncoded.append("foundationYear", studio.foundationYear.toString());
    const body = bodyEncoded.toString();

    return this.httpClient.post<Studio>(this.endpointStudio, body, httpOptionsUsingUrlEncoded);
  }

  createCharacter(character: Character): Observable <Character> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("character_name", character.character_name);
    bodyEncoded.append("gender", character.gender);
    bodyEncoded.append("age", character.age.toString());
    bodyEncoded.append("anime", character.id_anime.toString());
    bodyEncoded.append("image", character.image);
    const body = bodyEncoded.toString();
    console.log(body);

    return this.httpClient.post<Character>(this.endpointCharacter, body, httpOptionsUsingUrlEncoded);
  }

  deleteAnime(id_anime: number): Observable <Anime> {
    return this.httpClient.delete<Anime>(this.endpoint + "/" + id_anime);
  }

  deleteStudio(id_studio: number): Observable <Studio> {
    return this.httpClient.delete<Studio>(this.endpointStudio + "/" + id_studio);
  }

  deleteCharacter(id_character: number): Observable <Character> {
    return this.httpClient.delete<Character>(this.endpointCharacter + "/" + id_character);
  }

  updateAnime(id_anime: number, anime: Anime): Observable <Anime> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("title", anime.title);
    bodyEncoded.append("studio", anime.studio.id_studio.toString());
    bodyEncoded.append("year", anime.year.toString());
    bodyEncoded.append("image", anime.image);
    const body = bodyEncoded.toString();

    return this.httpClient.put<Anime>(this.endpoint + "/" + id_anime, body, httpOptionsUsingUrlEncoded);
  }

  updateStudio(id_studio: number, studio: Studio): Observable <Studio> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("studioName", studio.studioName);
    bodyEncoded.append("hq", studio.hq);
    bodyEncoded.append("foundationYear", studio.foundationYear.toString());
    const body = bodyEncoded.toString();

    return this.httpClient.put<Studio>(this.endpointStudio + "/" + id_studio, body, httpOptionsUsingUrlEncoded);
  }

  updateCharacter(id_character: number, character: Character): Observable <Character> {
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("character_name", character.character_name);
    bodyEncoded.append("gender", character.gender);
    bodyEncoded.append("age", character.age.toString());
    bodyEncoded.append("anime", character.anime.id.toString());
    bodyEncoded.append("image", character.image);
    const body = bodyEncoded.toString();

    return this.httpClient.put<Character>(this.endpointCharacter + "/" + id_character, body, httpOptionsUsingUrlEncoded);
  }

}
