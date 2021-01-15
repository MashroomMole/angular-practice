import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommentsModel, EntryModel, PostModel, UserModel } from '../model/model';
import { ServerResponse } from '../../user/store/user.server.response';
import { UserAdapter } from '../../user/store/user.adapter';

@Injectable({
  providedIn: 'root'
})
/**
 * ApiService provides service for http communication with server
 */

export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) {}

  public getFistFivePosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.apiUrl + 'posts/')
      .pipe(
        map((data: PostModel[] ) => {
          return data.slice(0, 5);
        }),
        catchError(this.handleError));
  }

  public getPost(postId: string): Observable<PostModel> {
    return this.http.get<PostModel>(this.apiUrl + 'posts/' + postId)
      .pipe(catchError(this.handleError));
  }


  public getAllPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.apiUrl + 'posts/')
      .pipe(
        map((data: PostModel[] ) => {
          return data;
        }),
        catchError(this.handleError));
  }

  public getComments(postId: string): Observable<CommentsModel[]> {
    return this.http.get<CommentsModel[]>(this.apiUrl + 'posts/' + postId + '/comments')
      .pipe(catchError(this.handleError));
  }

  // Reusing the same API for GuestBook component
  public getGuestBookEntries(): Observable<EntryModel[]> {
    return this.http.get<EntryModel[]>(this.apiUrl + 'posts/')
      .pipe(
        map((data: EntryModel[] ) => {
          return data.reverse();
        }),
        catchError(this.handleError));
  }

  public AddEntry(entry: EntryModel): Observable<EntryModel> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' });
    const newEntry = { ...entry  , id: null };
    return this.http.post<EntryModel>(this.apiUrl + 'posts/', newEntry, {headers})
      .pipe(
        catchError(this.handleError));
  }

  public getUserDetails(userId: string): Observable<UserModel> {
    return this.http.get<ServerResponse>(this.apiUrl + 'users/' + userId)
      .pipe(
        map((data: ServerResponse ) => {
          return UserAdapter.adapter(data);
        }),
        catchError(this.handleError));
  }

  private handleError(err: any): Observable<any> {
    // supports logging to the console only
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // Handles client-side or network errors
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // Handles server-side errors
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
