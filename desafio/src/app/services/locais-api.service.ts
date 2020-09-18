import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocaisApi } from './locais-api';

@Injectable({
  providedIn: 'root'
})
export class LocaisApiService {

  constructor( private httpClient:HttpClient ) { }
    public List():Observable<LocaisApi[]> {
      return this.httpClient.get<LocaisApi[]>('https://raw.githubusercontent.com/mgabrielaaf/desafio-teste/master/desafio/src/assets/api-locais.json');
    }
}
