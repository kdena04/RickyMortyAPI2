import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private apiUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private http:HttpClient) { }


  //metodo o funcion que consume los datos de una API externa

  getEpisodes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
