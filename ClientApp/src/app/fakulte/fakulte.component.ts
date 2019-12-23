import { Component, OnInit } from '@angular/core';
import { FakulteModel } from './Fakulte.model';
import { FakulteService } from './Fakulte.service';

@Component({
  selector: 'app-fakulte',
  templateUrl: './fakulte.component.html',
  styleUrls: ['./fakulte.component.css']
})
export class FakulteComponent implements OnInit {
  islemAd: string;
  fakulteler: FakulteModel[];
  duzenleModel: FakulteModel = new FakulteModel();
  constructor(private service: FakulteService) { }

  ngOnInit() {
    this.GetFakulteler();

  }
  btnSil_Click(id: number) {
    this.service.Delete(id).subscribe(
      (data) => {
        this.ngOnInit();

      },
      err => {
        console.log("Error", err);
      });


  }

  GetFakulteler(): void {
    this.service.Get().subscribe(r => {
      this.fakulteler = r;
    });
  }

  btnDuzenle_Click(k: FakulteModel) {
    this.islemAd = "Düzenle";
    let model = new FakulteModel();
    model.id = k.id;
    model.ad = k.ad;
    this.duzenleModel = model;
  }

  btnUpdate_Click() {
    if (this.duzenleModel.id == undefined) {
      this.service.Insert(this.duzenleModel).subscribe(
        (data) => {
          this.ngOnInit();
        },
        err => {
          console.log("Error", err);
        });
    }
    else {
      this.service.Update(this.duzenleModel).subscribe(
        (data) => {
          this.ngOnInit();
        },
        err => {
          console.log("Error", err);
        });
    }

    $('#duzenleModal').modal('hide');
  }

  btnYeniKayit_Click() {
    this.duzenleModel = new FakulteModel();
    this.islemAd = "Yeni Kayıt Ekleme";
  }


}
