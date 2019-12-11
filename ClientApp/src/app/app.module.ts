import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { KurumComponent } from './kurum/kurum.component';
import { OkulComponent } from './okul/okul.component';
import { MeslekComponent } from './meslek/meslek.component';
import { GorevComponent } from './gorev/gorev.component';
import { UyeComponent } from './uye/uye.component';
import { KullaniciComponent } from './kullanici/kullanici.component'; 
import { UyeEkleComponent } from './uye-ekle/uye-ekle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    KurumComponent,
    OkulComponent,
    MeslekComponent,
    GorevComponent,
    UyeComponent,
    KullaniciComponent,
    UyeEkleComponent,
   
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([ 
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'counter', component: CounterComponent },
        { path: 'fetch-data', component: FetchDataComponent },
        { path: 'kurumlar', component: KurumComponent },
        { path: 'okullar', component: OkulComponent },
        { path: 'meslekler', component: MeslekComponent },
        { path: 'gorevler', component: GorevComponent },
        { path: 'uyeler', component: UyeComponent },
        { path: 'kullanicilar', component: KullaniciComponent },
        { path: 'uyeekle', component: UyeEkleComponent } 

    ])
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
