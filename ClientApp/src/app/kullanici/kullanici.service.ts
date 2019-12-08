import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KullaniciModel } from './kullanici.model';
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
            });
    }

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
