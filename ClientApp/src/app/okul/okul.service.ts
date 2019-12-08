import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OkulModel } from './okul.model';

@Injectable({
    providedIn: 'root'
})
export class OkulService {

    constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient) {

    }
    public Get(): Observable<OkulModel[]> {
        return this.http.get<OkulModel[]>(this.baseUrl + 'api/Okul');
    }
    protected GetById(id: number): Observable<OkulModel> {
        return this.http.get<OkulModel>(this.baseUrl + 'api/Okul/' + id);
    }

    public Update(okul: OkulModel): Observable<OkulModel> {
        return this.http.put<OkulModel>(this.baseUrl + 'api/Okul/' + okul.id, okul);
    }

    public Insert(okul: OkulModel): Observable<OkulModel> {
        return this.http.post<OkulModel>(this.baseUrl + 'api/Okul', okul
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
        return this.http.delete<any>(this.baseUrl + "api/Okul/" + id,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization' : 'token' I/N
                }
            });
    }
}


