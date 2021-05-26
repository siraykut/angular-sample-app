import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from '../_models/City';
import {Gender} from '../_models/Gender';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]>{
    return this.http.get<City[]>('http://localhost:3000/Cities');
  }
  
  getGenders(): Observable<Gender[]>{
    return  this.http.get<Gender[]>('http://localhost:3000/Genders');
  }

}
