import { Component, OnInit } from '@angular/core';
import { KullaniciModel } from './kullanici.model';
import { KullaniciService } from './kullanici.service';

@Component({
  selector: 'app-kullanici',
  templateUrl: './kullanici.component.html',
  styleUrls: ['./kullanici.component.css']
})
export class KullaniciComponent implements OnInit {
    islemAd: string;
    kullanicilar: KullaniciModel[];
    duzenleModel: KullaniciModel = new KullaniciModel();
    constructor(private service: KullaniciService) { }

    ngOnInit() {
        this.GetKullanicilar();

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
        return "Bölge";
      case 4:
        return "Rapor";
      default:
        return 'N/A';
    }
  }

    GetKullanicilar(): void {
        this.service.Get().subscribe(r => {
          this.kullanicilar = r;
        });

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
        if (this.duzenleModel.id == undefined) {
            this.service.Insert(this.duzenleModel).subscribe(
                (data) => {
                    this.ngOnInit();
                }),
                err => {
                    console.log("Error", err);
                };
        }
        else {
            this.service.Update(this.duzenleModel).subscribe(
                (data) => {
                    this.ngOnInit();
                }),
                err => {
                    console.log("Error", err);
                };
        }

      $('#duzenleModal').modal('hide');
    }

    btnYeniKayit_Click() {
        this.duzenleModel = new KullaniciModel();
        this.islemAd = "Yeni Kayıt Ekleme";
    }


}
