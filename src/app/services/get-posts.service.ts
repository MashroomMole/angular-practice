import { Injectable } from '@angular/core';
import { PostModel } from '../shared/model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()

export class PostsService {

  constructor(private http: HttpClient) {

  }
  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(catchError(this.handleError<PostModel[]>('getPosts', [])));
  }

  getPost(postId: string): Observable<PostModel> {
    return this.http.get<PostModel>('https://jsonplaceholder.typicode.com/posts/' + postId)
      .pipe(catchError(this.handleError<PostModel>('getPost')));
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }
}
