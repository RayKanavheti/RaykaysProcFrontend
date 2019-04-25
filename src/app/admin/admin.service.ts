import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }
  private BASE_URL = environment.API_BASE_URL;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  submitOrderProduct(products: IOrder[]): Observable<IOrder[]> {
    const url = `${this.BASE_URL}/api/Order`;
    return this.httpClient.post<IProduct[]>(url, product, this.httpOptions)
    .pipe(
      retry(2), // retry a failed request up to 3 times
      catchError(this.handleError));
  }
 // Catching Errors
 private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.log('the ERROR', error);
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.log('the ERROR', error);
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.message}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
}

}
