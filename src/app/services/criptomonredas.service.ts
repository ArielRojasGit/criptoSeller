import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class CriptomonedasService {

    constructor(private http: HttpClient) { }

    gettingCriptos(){
        return this.http.get("http://localhost:8532/criptomonedas/pintarcriptos")//el /criptomonedas viene del index.ts del backend y /pintacriptos viene del criptomonedas.router.ts del backend
    }


}