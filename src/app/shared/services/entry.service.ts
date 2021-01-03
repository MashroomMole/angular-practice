import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EntryModel } from '../model/model';

@Injectable({
  providedIn: 'root' // TODO: figure out how to inject service instead of being at root of app
})

export class GuestBookService {

  constructor(private http: HttpClient) {}
  public AddEntry(entry: EntryModel): Observable<EntryModel> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' });
    const newEntry = { ...entry  , id: null };
    return this.http.post<EntryModel>('https://jsonplaceholder.typicode.com/posts', newEntry, {headers})
      .pipe(
        catchError(this.handleError));
  }

  private handleError(err: any): Observable<any> {
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
  //
  // /**
  //  * Handles any error encountered while sending http request
  //  */
  // private handleError<T>(operation = 'operation', result?: T): any {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     return of(result as T);
  //   };
  // }
}
