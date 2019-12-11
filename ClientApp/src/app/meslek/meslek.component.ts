import { Component, OnInit } from '@angular/core';
import { MeslekModel } from './meslek.model';
import { MeslekService } from './meslek.service';

@Component({
  selector: 'app-meslek',
  templateUrl: './meslek.component.html',
  styleUrls: ['./meslek.component.css']
})
export class MeslekComponent implements OnInit {
    islemAd: string;
    meslekler: MeslekModel[];
    duzenleModel: MeslekModel = new MeslekModel();
    constructor(private service: MeslekService) { }

    ngOnInit() {
        this.GetMeslekler();

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

    GetMeslekler(): void {
        this.service.Get().subscribe(r => {
            this.meslekler = r;
        });
    }

    btnDuzenle_Click(k: MeslekModel) {
        this.islemAd = "Düzenle";
        let model = new MeslekModel();
        model.id = k.id;
        model.ad = k.ad;
        this.duzenleModel = model;
    }

    btnUpdate_Click() {
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
        this.duzenleModel = new MeslekModel();
        this.islemAd = "Yeni Kayıt Ekleme";
    }


}
