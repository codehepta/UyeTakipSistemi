import { Component, OnInit } from '@angular/core';
import { MeslekService } from '../meslek/meslek.service';
import { MeslekModel } from '../meslek/meslek.model';
import { KurumModel } from '../kurum/kurum.model';
import { KurumService } from '../kurum/kurum.service';
import { OkulModel } from '../okul/okul.model';
import { OkulService } from '../okul/okul.service';
import { IlModel } from '../shared/il.model';
import { IlceModel } from '../shared/ilce.model';
import { IlService } from '../shared/il.service';
import { UyeModel } from '../uye/uye.model';
import { UyeService } from '../uye/uye.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uye-ekle',
  templateUrl: './uye-ekle.component.html',
  styles: []
})
export class UyeEkleComponent implements OnInit {
    meslekler: MeslekModel[];
    kurumlar: KurumModel[];
    okullar: OkulModel[];
    iller: IlModel[];
    seciliIlceler: IlceModel[];
    duzenleModel: UyeModel = new UyeModel();

    constructor(private meslekService: MeslekService,
        private kurumService: KurumService,
        private okulService: OkulService,
        private ilService: IlService,
        private uyeService: UyeService,
        private router: Router
    ) { }

    ngOnInit() {
        this.GetMeslekler();
        this.GetKurumlar();
        this.GetOkullar();
        this.GetIller();
       
    }

    btn_Kaydet_Click() {
        this.duzenleModel.TypeFix();
        console.log(this.duzenleModel);
        this.uyeService.Insert(this.duzenleModel).subscribe(
            (data) => {
                this.uyeService.uyelerChanged.emit(true);
                this.router.navigate(['uyeler']);
            }),
            err => {
                console.log(this.duzenleModel);
                console.log("Error", err);
               
            };
       
    }

    GetMeslekler(): void {
        this.meslekService.Get().subscribe(r => {
            this.meslekler = r;
        });
    }

    GetKurumlar(): void {
        this.kurumService.GetKurumlar().subscribe(r => {
            this.kurumlar = r;
        });
    }
    GetOkullar(): void {
        this.okulService.Get().subscribe(r => {
            this.okullar = r;
        });
    }

    GetIller(): void {
        this.iller = this.ilService.Get();
        this.seciliIlceler = this.ilService.GetIlceleri(1);
    }

    txtIkametIl_Changed($event) {
        this.duzenleModel.ikametIlId = $event.target.value; 
        this.seciliIlceler = this.ilService.GetIlceleri(this.duzenleModel.ikametIlId);
    }
    

}
