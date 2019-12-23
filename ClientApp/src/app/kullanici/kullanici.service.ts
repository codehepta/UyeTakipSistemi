import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { KullaniciModel } from './kullanici.model';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})

export class KullaniciService {
  
  constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient) {

  }
  public Get(): Observable<KullaniciModel[]> {
    return this.http.get<KullaniciModel[]>(this.baseUrl + 'api/Kullanici');
  }
  protected GetById(id: number): Observable<KullaniciModel> {
    return this.http.get<KullaniciModel>(this.baseUrl + 'api/Kullanici/' + id);
  }

  public Update(kullanici: KullaniciModel): Observable<KullaniciModel> {
    return this.http.put<KullaniciModel>(this.baseUrl + 'api/Kullanici/' + kullanici.id, kullanici);
  }

  public Insert(kullanici: KullaniciModel): Observable<KullaniciModel> {
    return this.http.post<KullaniciModel>(this.baseUrl + 'api/Kullanici', kullanici
      ,
      {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization' : 'token' I/N
        }
      })
      //.pipe(
      //  catchError(this.handleError)
      //);

  }

  //add(kullanici: KullaniciModel): Observable<KullaniciModel> {
  //  return this.http.post<KullaniciModel>(this.baseUrl + 'api/Kullanici', kullanici, httpOptions)
  //    .pipe(
  //      catchError(this.handleError)
  //    );
  //}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  public Delete(id: number): any {
    //console.log(id.toString());
    return this.http.delete<any>(this.baseUrl + "api/Kullanici/" + id,
      {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization' : 'token' I/N
        }
      });
  }
}
