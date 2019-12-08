import { Component, OnInit } from '@angular/core';
import { GorevModel } from './gorev.model';
import { GorevService } from './gorev.service';

@Component({
  selector: 'app-gorev',
  templateUrl: './gorev.component.html',
  styleUrls: ['./gorev.component.css']
})
export class GorevComponent implements OnInit {
    islemAd: string;
    gorevler: GorevModel[];
    duzenleModel: GorevModel = new GorevModel();
    constructor(private service: GorevService) { }

    ngOnInit() {
        this.GetGorevler();

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

    GetGorevler(): void {
        this.service.Get().subscribe(r => {
            this.gorevler = r;
        });
    }

    btnDuzenle_Click(k: GorevModel) {
        this.islemAd = "Düzenle";
        let model = new GorevModel();
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
        this.duzenleModel = new GorevModel();
        this.islemAd = "Yeni Kayıt Ekleme";
    }


}

