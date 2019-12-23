import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FakulteModel } from './fakulte.model';

@Injectable({
  providedIn: 'root'
})
export class FakulteService {

  constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient) {

  }
  public Get(): Observable<FakulteModel[]> {
    return this.http.get<FakulteModel[]>(this.baseUrl + 'api/Fakulte');
  }
  protected GetById(id: number): Observable<FakulteModel> {
    return this.http.get<FakulteModel>(this.baseUrl + 'api/Fakulte/' + id);
  }

  public Update(fakulte: FakulteModel): Observable<FakulteModel> {
    return this.http.put<FakulteModel>(this.baseUrl + 'api/Fakulte/' + fakulte.id, fakulte);
  }

  public Insert(fakulte: FakulteModel): Observable<FakulteModel> {
    return this.http.post<FakulteModel>(this.baseUrl + 'api/Fakulte', fakulte
      ,
      {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization' : 'token' I/N
        }
      });
  }

  public Delete(id: number): any {
    //console.log(id.toString());
    return this.http.delete<any>(this.baseUrl + "api/Fakulte/" + id,
      {
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization' : 'token' I/N
        }
      });
  }
}


