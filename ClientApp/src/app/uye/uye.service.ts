import { Injectable, Inject, EventEmitter } from '@angular/core';
import { UyeModel } from './uye.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { KeyValue } from '@angular/common';
import { KeyValueModel } from '../shared/KeyValue';


@Injectable({
  providedIn: 'root'
})
export class UyeService {
    uyelerChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient) {

    }
    public Get(): Observable<UyeModel[]> {
        return this.http.get<UyeModel[]>(this.baseUrl + 'api/Uye');
    }

  //GetUyeGorevDurumlar
  public GetUyeGorevDurumlar(): Observable<KeyValueModel[]> {
    return this.http.get<KeyValueModel[]>(this.baseUrl + 'api/Uye/GetUyeGorevDurumlar');
  }

  //GetUyeGorevDurumlar
  public GetUyeIller(): Observable<KeyValueModel[]> {
    return this.http.get<KeyValueModel[]>(this.baseUrl + 'api/Uye/GetUyeIller');
  }

    protected GetById(id: number): Observable<UyeModel> {
        return this.http.get<UyeModel>(this.baseUrl + 'api/Uye/' + id);
    }

    public Update(uye: UyeModel): Observable<UyeModel> {
        return this.http.put<UyeModel>(this.baseUrl + 'api/Uye/' + uye.id, uye);
    }

    public Insert(uye: UyeModel): Observable<UyeModel> {

        return this.http.post<UyeModel>(this.baseUrl + 'api/Uye', uye
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
        return this.http.delete<any>(this.baseUrl + "api/Uye/" + id,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization' : 'token' I/N
                }
            });
        
    }
}
