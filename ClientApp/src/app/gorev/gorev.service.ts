import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GorevModel } from './gorev.model';

@Injectable({
    providedIn: 'root'
})
export class GorevService {

    constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient) {

    }
    public Get(): Observable<GorevModel[]> {
        return this.http.get<GorevModel[]>(this.baseUrl + 'api/Gorev');
    }
    protected GetById(id: number): Observable<GorevModel> {
        return this.http.get<GorevModel>(this.baseUrl + 'api/Gorev/' + id);
    }

    public Update(gorev: GorevModel): Observable<GorevModel> {
        return this.http.put<GorevModel>(this.baseUrl + 'api/Gorev/' + gorev.id, gorev);
    }

    public Insert(gorev: GorevModel): Observable<GorevModel> {
        return this.http.post<GorevModel>(this.baseUrl + 'api/Gorev', gorev
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
        return this.http.delete<any>(this.baseUrl + "api/Gorev/" + id,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization' : 'token' I/N
                }
            });
    }
}


