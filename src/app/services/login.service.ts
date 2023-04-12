import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signUp } from '../models/signData.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  LogUser(userData: {email: string, password: string}){
    console.log(userData)
    return this.http.post('http://localhost:8532/user/get', userData)
  }


  Sign(signDates: signUp){

    return this.http.post('http://localhost:8532/user/add', signDates)
  }

}
