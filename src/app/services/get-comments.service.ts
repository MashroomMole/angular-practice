import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CommentsModel } from '../shared/model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CommentsService {
  constructor(private http: HttpClient) {
  }

  getComments(postId: string): Observable<CommentsModel[]> {
    return this.http.get<CommentsModel[]>('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
      .pipe(catchError(this.handleError));
  }


  // tslint:disable-next-line:typedef
  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }


  // public handleError<T>(operation = 'operation', result?: T): any {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     return of(result as T);
  //   };

  // }
}
