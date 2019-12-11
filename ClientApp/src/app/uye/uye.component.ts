import { Component, OnInit } from '@angular/core';
import { UyeModel } from './uye.model';
import { UyeService } from './uye.service';
import { IlService } from '../shared/il.service';

@Component({
  selector: 'app-uye',
  templateUrl: './uye.component.html',
  styleUrls: ['./uye.component.css']
})
export class UyeComponent implements OnInit {
    islemAd: string;
    uyeler: UyeModel[];
    duzenleModel: UyeModel = new UyeModel();
    constructor(private service: UyeService,
        private ilService: IlService) { }

    ngOnInit() {
        this.GetUyeler();
        this.service.uyelerChanged.subscribe(
            (r => this.GetUyeler())
        );

    }
    btnSil_Click(id: number) {
        this.service.Delete(id).subscribe(
            (data) => {
                this.service.uyelerChanged.emit();

            }),
            err => {
                console.log("Error", err);
            };


    }

    GetUyeler(): void {
        this.service.Get().subscribe(r => {
            this.uyeler = r;
        });
    }

    GetIlAdi(pId:number): string {
        return this.ilService.GetIlAdi(pId);
    }

    GetIlceAdi(pId: number): string {
        return this.ilService.GetIlceAdi(pId);
    }

    btnDuzenle_Click(k: UyeModel) {
        this.islemAd = "Düzenle";
        let model = new UyeModel();
        model.id = k.id;
        model.adi = k.adi;
        this.duzenleModel = model;
    }

    btnUpdate_Click() {
        if (this.duzenleModel.id == undefined) {
            this.service.Insert(this.duzenleModel).subscribe(
                (data) => {
                    this.service.uyelerChanged.emit();
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
        this.duzenleModel = new UyeModel();
        this.islemAd = "Yeni Kayıt Ekleme";
    }


}
