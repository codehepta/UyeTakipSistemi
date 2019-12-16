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
import { NbToastrService, NbComponentStatus } from '@nebular/theme';
import { KeyIntPairModel, EnumsService } from '../shared/enums.service';

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

  egitimDurumlari: KeyIntPairModel[];
  ogrenimDurumlari: KeyIntPairModel[];
  yabanciDiller: KeyIntPairModel[];
  yabanciDilSeviyeler: KeyIntPairModel[];
  sporLisanslari: KeyIntPairModel[];
  uyeGorevDurumlari: KeyIntPairModel[];

  constructor(private meslekService: MeslekService,
    private kurumService: KurumService,
    private okulService: OkulService,
    private ilService: IlService,
    private uyeService: UyeService,
    private router: Router,
    private toastrService: NbToastrService,
    private enumsService: EnumsService
  ) { }

  ngOnInit() {
    this.GetMeslekler();
    this.GetKurumlar();
    this.GetOkullar();
    this.GetIller();
  }

  btn_Kaydet_Click() {
    let validationErrors: string[] = this.duzenleModel.TypeFixModelValidate();
    if (validationErrors != null && validationErrors.length > 0) {
      //console.log('validation failed' + validationErrors.length);
      let status: any = 'warning';
     // let validationErrorsMessage: string = "";
      for (var i = 0; i < validationErrors.length; i++) {
        this.toastrService.show(
          validationErrors[i]
          , 'Form verilerini kontrol edin:'
          , { status });
      };

      
      return;
    }
    console.log(this.duzenleModel);
    this.uyeService.Insert(this.duzenleModel).subscribe(
      (data) => {
        this.uyeService.uyelerChanged.emit(true);
        this.showToast('success');
        this.router.navigate(['uyeler']);
      }),
      err => {
        this.showToast('danger');
        console.log(this.duzenleModel);
        console.log("Error", err);

      };

  }

  showToast(status: NbComponentStatus) {
    if (status == "success")
      this.toastrService.show(status, `Kayıt Yapıldı`, { status });
    if (status == "danger")
      this.toastrService.show(status, `Kayıt yapılamadı`, { status });
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
    this.egitimDurumlari = this.enumsService.GetEgitimDurumlari();
    this.ogrenimDurumlari = this.enumsService.GetOgrenimDurumlari();
    this.yabanciDiller = this.enumsService.GetYabanciDiller();
    this.yabanciDilSeviyeler = this.enumsService.GetYabanciDilSeviyeler();
    this.sporLisanslari = this.enumsService.GetSporLisanslari();
    this.uyeGorevDurumlari = this.enumsService.GetUyeGorevDurumlari();

  }

  txtIkametIl_Changed($event) {
    this.duzenleModel.ikametIlId = $event.target.value;
    this.seciliIlceler = this.ilService.GetIlceleri(this.duzenleModel.ikametIlId);
  }


}
