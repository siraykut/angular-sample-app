import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../_models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(Id: number): Observable<Comment[]>{
    return this.http.get<Comment[]>('http://localhost:3000/Comments/?NewsId=' + Id);
  }
  saveCommand(comment: Comment): void{
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        Authorization: 'Blank'
    })};

    this.http.post<Comment>('http://localhost:3000/Comments', comment, httpOptions).subscribe(
      result => {
          console.log(JSON.stringify(result));
      },
      error => {
        console.log(error);
      },
      () => {
      }
    );
  }
}
