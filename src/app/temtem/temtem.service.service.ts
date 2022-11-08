import { Injectable } from '@angular/core';
import { Observable, catchError, tap, map, throwError } from 'rxjs';
import { ITemTem } from './ITemTem';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TemtemService {
  private temtemUrl =
    'https://temtem-api.mael.tech/api/temtems?expand=traits&weaknesses=true';

  constructor(private httpClient: HttpClient) {}

  getTemTems(): Observable<ITemTem[]> {
    return this.httpClient.get<ITemTem[]>(this.temtemUrl).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getTemTemByNumber(number: number): Observable<ITemTem | undefined> {
    return this.getTemTems().pipe(
      map((temtems: ITemTem[]) => temtems.find((t) => t.number === number))
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
