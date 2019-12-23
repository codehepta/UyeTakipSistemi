import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { KurumComponent } from './kurum/kurum.component';
import { OkulComponent } from './okul/okul.component';
import { MeslekComponent } from './meslek/meslek.component';
import { GorevComponent } from './gorev/gorev.component';
import { UyeComponent } from './uye/uye.component';
import { KullaniciComponent } from './kullanici/kullanici.component'; 
import { UyeEkleComponent } from './uye-ekle/uye-ekle.component';
import { PieChartComponent } from './chart-components/pie-chart/pie-chart.component';
import { NbThemeModule, NbCardModule, NbLayoutModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PieChart2Component } from './chart-components/pie-chart2/pie-chart2.component';
import { FakulteComponent } from './fakulte/fakulte.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    KurumComponent,
    OkulComponent,
    MeslekComponent,
    GorevComponent,
    UyeComponent,
    KullaniciComponent,
    UyeEkleComponent,
    PieChartComponent,
    PieChart2Component,
    FakulteComponent
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartsModule,
    NbCardModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbThemeModule.forRoot({
      name: 'default',
    }),
    NbToastrModule.forRoot(),
    RouterModule.forRoot([ 
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'kurumlar', component: KurumComponent },
        { path: 'okullar', component: OkulComponent },
        { path: 'meslekler', component: MeslekComponent },
        { path: 'gorevler', component: GorevComponent },
        { path: 'uyeler', component: UyeComponent },
        { path: 'kullanicilar', component: KullaniciComponent },
        { path: 'fakulteler', component: FakulteComponent },
        { path: 'uyeekle', component: UyeEkleComponent } 

    ])
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
