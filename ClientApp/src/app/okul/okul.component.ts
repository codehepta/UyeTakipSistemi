import { Component, OnInit } from '@angular/core';
import { OkulModel } from './okul.model';
import { OkulService } from './okul.service';

@Component({
  selector: 'app-okul',
  templateUrl: './okul.component.html',
  styleUrls: ['./okul.component.css']
})
export class OkulComponent implements OnInit {
    islemAd: string;
    okullar: OkulModel[];
    duzenleModel: OkulModel = new OkulModel();
    constructor(private service: OkulService) { }

    ngOnInit() {
        this.GetOkullar();

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

    GetOkullar(): void {
        this.service.Get().subscribe(r => {
            this.okullar = r;
        });
    }

    btnDuzenle_Click(k: OkulModel) {
        this.islemAd = "Düzenle";
        let model = new OkulModel();
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
        this.duzenleModel = new OkulModel();
        this.islemAd = "Yeni Kayıt Ekleme";
    }


}
