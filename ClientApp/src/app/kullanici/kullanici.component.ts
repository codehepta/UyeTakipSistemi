import { Component, OnInit } from '@angular/core';
import { KullaniciModel } from './kullanici.model';
import { KullaniciService } from './kullanici.service';
import { IlModel } from '../shared/il.model';
import { IlService } from '../shared/il.service';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-kullanici',
  templateUrl: './kullanici.component.html',
  styleUrls: ['./kullanici.component.css']
})
export class KullaniciComponent implements OnInit {
  islemAd: string;
  kullanicilar: KullaniciModel[] = [];
  //duzenleModel: KullaniciModel;// = new KullaniciModel();
  duzenleModel: KullaniciModel = new KullaniciModel();
  iller: IlModel[];
  errorMessages: string;



  constructor(private service: KullaniciService, private ilService: IlService, private toastrService: NbToastrService) { }

  ngOnInit() {
    this.GetKullanicilar();
    this.iller = this.ilService.Get();

  }
  btnSil_Click(id: number) {
    this.service.Delete(id).subscribe(
      (data) => {
        this.ngOnInit();

      }),
      err => {
        console.log("Error", err);
      };


  }

  public getkullaniciTipi(tip: number): string {
    switch (tip) {
      case 1:
        return "Admin";
      case 2:
        return "Genel Merkez";
      case 3:
        return "İl";
      case 4:
        return "Rapor";
      default:
        return 'N/A';
    }
  }

  GetKullanicilar(): void {
    this.service.Get().subscribe((r: KullaniciModel[]) => {
      //this.kullanicilar = [];
      //r.forEach(f => {
      //  let k = new KullaniciModel();
      //  k.id = f.id;
      //  k.ilId = f.id;
      //  k.kullaniciTipi = f.kullaniciTipi;
      //  k.password = f.password;
      //  k.username = f.password;

      //  this.kullanicilar.push(k);
      //}
      //);
      //his.kullanicilar = r;
      this.kullanicilar = r.map(m => {
        let k = new KullaniciModel();
        k.kullaniciTipi = m.kullaniciTipi;
        k.id = m.id;
        k.ilId = m.ilId;
        k.password = m.password;
        k.username = m.password;
        return k;
      });

      console.log(this.kullanicilar);

      //r.map(t => new KullaniciModel(t.id, t.username))
    });

  }

  GetIlAdi(pId: number): string {
    return this.ilService.GetIlAdi(pId);
  }

  btnDuzenle_Click(k: KullaniciModel) {
    this.islemAd = "Düzenle";

    let model = new KullaniciModel();
    model.id = k.id;
    model.username = k.username;
    model.password = k.password;
    model.kullaniciTipi = k.kullaniciTipi;
    this.duzenleModel = model;
  }

  btnUpdate_Click() {
    this.duzenleModel.kullaniciTipi = +this.duzenleModel.kullaniciTipi;
    this.duzenleModel.ilId = +this.duzenleModel.ilId;
    console.log(this.duzenleModel);
    if (this.duzenleModel.id == undefined) {
      this.service.Insert(this.duzenleModel)
        .subscribe(
          (data) => {
            console.log('data');
            this.ngOnInit();
            $('#duzenleModal').modal('hide');
          },
          err => {
            console.log("Error", err);
            this.errorMessages = err.error.detail;
          }
        );

    }
    else {
      this.service.Update(this.duzenleModel).subscribe(
        (data) => {
          this.ngOnInit();
          $('#duzenleModal').modal('hide');
        },
        err => {
          console.log("Error", err);
        });
    }


  }

  btnYeniKayit_Click() {
    this.duzenleModel = new KullaniciModel();
    this.islemAd = "Yeni Kayıt Ekleme";
  }

  formChange() {
    this.errorMessages = null;
  }


}
