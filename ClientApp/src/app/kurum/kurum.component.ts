import { Component, OnInit } from '@angular/core';
import { KurumService } from './kurum.service';
import { KurumModel } from './kurum.model';

@Component({
    selector: 'app-kurum',
    templateUrl: './kurum.component.html',
    styleUrls: ['./kurum.component.css']
})
export class KurumComponent implements OnInit {
    islemAd: string;
    kurumlar: KurumModel[];
    duzenleModel: KurumModel = new KurumModel();
    constructor(private service: KurumService) { }

    ngOnInit() {
        this.GetKurumlar();

    }
    btnSil_Click(id: number) {
        this.service.DeleteKurum(id).subscribe(
            (data) => {
                this.ngOnInit();

            }),
            err => {
                console.log("Error",err);
            };


    }

    GetKurumlar(): void {
        this.service.GetKurumlar().subscribe(r => {
            this.kurumlar = r;
        });
    }

    btnDuzenle_Click(k: KurumModel) {
        this.islemAd = "Düzenle";
        let model = new KurumModel();
        model.id = k.id;
        model.ad = k.ad;
        this.duzenleModel = model;
    }

    btnUpdate_Click() {
        if (this.duzenleModel.id == undefined) {
            this.service.InsertKurum(this.duzenleModel).subscribe(
                (data) => {
                    this.ngOnInit();
                }),
                err => {
                    console.log("Error", err);
                };
        }
        else {
            this.service.UpdateKurum(this.duzenleModel).subscribe(
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
        this.duzenleModel = new KurumModel();
        this.islemAd = "Yeni Kayıt Ekleme";
    }

}
