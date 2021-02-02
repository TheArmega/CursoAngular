import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey   : string = 'mi4TgJTu2nYNPKNUuXcMr0129ydVNJ8w';
  private _historial: string[] = [];

  public resultados: Gif[] = [];
  
  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  buscarGifs(query: string) {

    query = query.trim().toLocaleLowerCase();

    if(this._historial.includes(query)) {
      const index: number = this._historial.indexOf(query);
      this._historial.splice(index, 1);
    } 

    this._historial.unshift(query);
    this._historial = this._historial.splice(0, 10);
    
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=mi4TgJTu2nYNPKNUuXcMr0129ydVNJ8w&q=${query}&limit=10`)
        .subscribe((resp) => {
          console.log(resp.data)
          this.resultados = resp.data;
        });

  }

}
