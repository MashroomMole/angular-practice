import { Injectable } from '@angular/core';
import { CommentsModel, PostModel } from '../model/model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable()

export class PostsService {

  constructor(private http: HttpClient) {

  }
  getFistFivePosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map((data: PostModel[] ) => {
          return data.slice(0, 5);
        }),
        catchError(this.handleError<PostModel[]>('getPosts', [])));
  }

  getPost(postId: string): Observable<PostModel> {
    return this.http.get<PostModel>('https://jsonplaceholder.typicode.com/posts/' + postId)
      .pipe(catchError(this.handleError<PostModel>('getPost')));
  }


  getAllPosts(): Observable<CommentsModel[]> {
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map((data: PostModel[] ) => {
          return data;
        }),
        catchError(this.handleError<PostModel[]>('getAllPosts', [])));
  }


  getComments(postId: string): Observable<CommentsModel[]> {
    return this.http.get<CommentsModel[]>('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
      .pipe(catchError(this.handleError<CommentsModel[]>('getComments', [])));
  }

  /**
   * Handles any error encountered while sending http request
   */
  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }
}
