import { Injectable } from '@angular/core';
import { PostsModel } from '../shared/posts.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()

export class PostsService {

  constructor(private http: HttpClient) {

  }
  getPosts(): Observable<PostsModel[]> {
    return this.http.get<PostsModel[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(catchError(this.handleError<PostsModel[]>('getPosts', [])));
  }

  getPost(id: number): Observable<PostsModel> {
    return this.http.get<PostsModel>('https://jsonplaceholder.typicode.com/posts/' + id)
      .pipe(catchError(this.handleError<PostsModel>('getPost')));
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }
}
