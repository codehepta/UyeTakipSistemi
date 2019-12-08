import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
    public okullar: KeyValue[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      http.get<KeyValue[]>(baseUrl + 'api/Okul').subscribe(result => {
          this.okullar = result;
          console.log("okul listesi alındı");
    }, error => console.error(error));
  }
}

interface KeyValue {
    id: number;
    ad: string;
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
