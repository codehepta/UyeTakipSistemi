import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeslekModel } from './meslek.model';

@Injectable({
    providedIn: 'root'
})
export class MeslekService {

    constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient) {

    }
    public Get(): Observable<MeslekModel[]> {
        return this.http.get<MeslekModel[]>(this.baseUrl + 'api/Meslek');
    }
    protected GetById(id: number): Observable<MeslekModel> {
        return this.http.get<MeslekModel>(this.baseUrl + 'api/Meslek/' + id);
    }

    public Update(meslek: MeslekModel): Observable<MeslekModel> {
        return this.http.put<MeslekModel>(this.baseUrl + 'api/Meslek/' + meslek.id, meslek);
    }

    public Insert(meslek: MeslekModel): Observable<MeslekModel> {
        return this.http.post<MeslekModel>(this.baseUrl + 'api/Meslek', meslek
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
        return this.http.delete<any>(this.baseUrl + "api/Meslek/" + id,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization' : 'token' I/N
                }
            });
    }
}


