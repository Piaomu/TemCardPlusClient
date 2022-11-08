import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, map, throwError } from 'rxjs';
import { Iitem } from './iitem';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private itemUrl = 'https://temtem-api.mael.tech/api/items';
  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<Iitem[]> {
    return this.httpClient.get<Iitem[]>(this.itemUrl).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
