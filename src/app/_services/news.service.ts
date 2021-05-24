import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {NewsSummary} from '../_viewModels/NewsSummary';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNewsSummary(): Observable<NewsSummary[]>{
    return  this.http.get<NewsSummary[]>('http://localhost:3000/News');
  }
  getNewsDetail(Id: number): Observable<NewsSummary[]>{
    console.log(Id);
    return  this.http.get<NewsSummary[]>('http://localhost:3000/News/?Id=' + Id);
  }
}
