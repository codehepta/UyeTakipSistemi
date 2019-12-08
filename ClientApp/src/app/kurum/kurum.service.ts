import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KurumModel } from './kurum.model';

@Injectable({
  providedIn: 'root'
})
export class KurumService {

    constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient) {

    }
    public GetKurumlar(): Observable<KurumModel[]> {
        return this.http.get<KurumModel[]>(this.baseUrl + 'api/Kurum');
    }
    protected GetKurumById(id: number): Observable<KurumModel> {
        return this.http.get<KurumModel>(this.baseUrl + 'api/Kurum/' + id);
    }

    public UpdateKurum(kurum: KurumModel): Observable<KurumModel> {
        return this.http.put<KurumModel>(this.baseUrl + 'api/Kurum/' + kurum.id,kurum);
    }

    public InsertKurum(kurum: KurumModel): Observable<KurumModel> {
        return this.http.post<KurumModel>(this.baseUrl + 'api/Kurum', kurum
        ,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization' : 'token' I/N
                }
            });
    }

    public DeleteKurum(id: number): any {
        //console.log(id.toString());
        return this.http.delete<any>(this.baseUrl + "api/Kurum/" + id,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization' : 'token' I/N
                }
            });
    }
}


