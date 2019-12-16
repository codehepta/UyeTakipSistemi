import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnumsService {
  egitimDurumlari: KeyIntPairModel[] = [
    new KeyIntPairModel(1, 'Lisans'),
    new KeyIntPairModel(2, 'Lisansüstü'),
    new KeyIntPairModel(3, 'Lise'),
    new KeyIntPairModel(4, 'İlk Öğretim'),
    new KeyIntPairModel(5, 'Diğer')
  ];

  ogrenimDurumlari: KeyIntPairModel[] = [
    new KeyIntPairModel(1, 'Mezun'),
    new KeyIntPairModel(2, 'Devam Ediyor')
  ];

  yabanciDiller: KeyIntPairModel[] = [
    new KeyIntPairModel(1, 'İngilizce'),
    new KeyIntPairModel(2, 'Fransızca'),
    new KeyIntPairModel(3, 'Almanca'),
    new KeyIntPairModel(4, 'Arapça'),
    new KeyIntPairModel(5, 'Japonca'),
    new KeyIntPairModel(6, 'Çince'),
    new KeyIntPairModel(7, 'İspanyolca'),
    new KeyIntPairModel(8, 'Hintçe'),
    new KeyIntPairModel(9, 'Portekizce'),
    new KeyIntPairModel(10, 'Rusça'),
    new KeyIntPairModel(11, 'Osmanlıca'),
    new KeyIntPairModel(12, 'Farsça'),
    new KeyIntPairModel(13, 'Bengalce'),
    new KeyIntPairModel(14, 'Korece'),
    new KeyIntPairModel(15, 'İtalyanca')
  ];

  yabanciDilSeviyeler:
    KeyIntPairModel[] = [
      new KeyIntPairModel(1, 'Az'),
      new KeyIntPairModel(2, 'Orta'),
      new KeyIntPairModel(3, 'İyi'),
      new KeyIntPairModel(4, 'Çok İyi')
    ];

  sporLisanslari: KeyIntPairModel[] = [
    new KeyIntPairModel(1, 'Futbol'),
    new KeyIntPairModel(2, 'Voleybol'),
    new KeyIntPairModel(3, 'Basketbol'),
    new KeyIntPairModel(4, 'Güreş'),
    new KeyIntPairModel(5, 'Tenis'),
    new KeyIntPairModel(6, 'Halter'),
    new KeyIntPairModel(7, 'Kayak'),
    new KeyIntPairModel(8, 'Kick Boks'),
    new KeyIntPairModel(9, 'Kürek'),
    new KeyIntPairModel(10, 'Yüzme')
  ];

  uyeGorevDurumlari: KeyIntPairModel[] = [
    new KeyIntPairModel(1, 'Görevli'),
    new KeyIntPairModel(2, 'Görev Alabilir'),
    new KeyIntPairModel(3, 'Görev Alamıyor'),
    new KeyIntPairModel(4, 'Görev Almıyor'),
    new KeyIntPairModel(5, 'Numara Yanlış')
  ];


  public GetEgitimDurumlari(): KeyIntPairModel[] {
    return this.egitimDurumlari.slice();
  }

  public GetOgrenimDurumlari(): KeyIntPairModel[] {
    return this.ogrenimDurumlari.slice();
  }

  public GetYabanciDiller(): KeyIntPairModel[] {
    return this.yabanciDiller.slice();
  }

  public GetYabanciDilSeviyeler(): KeyIntPairModel[] {
    return this.yabanciDilSeviyeler.slice();
  }

  public GetSporLisanslari(): KeyIntPairModel[] {
    return this.sporLisanslari.slice();
  }

  public GetUyeGorevDurumlari(): KeyIntPairModel[] {
    return this.uyeGorevDurumlari.slice();
  }

  //
  public GetEgitimDurumuById(id: number): string {
    if (id != undefined && id != 0)
      return this.egitimDurumlari.slice().find(x => x.key == id).value;
  }

  public GetOgrenimDurumuById(id: number): string {
    if (id != undefined && id != 0)
      return this.ogrenimDurumlari.slice().find(x => x.key == id).value;
  }

  public GetYabanciDilById(id: number): string {
    if (id != undefined && id != 0)
      return this.yabanciDiller.slice().find(x => x.key == id).value;
  }

  public GetYabanciDilSeviyeById(id: number): string {
    if (id != undefined && id != 0)
      return this.yabanciDilSeviyeler.slice().find(x => x.key == id).value;
  }

  public GetSporLisansById(id: number): string {
    if (id != undefined && id != 0)
      return this.sporLisanslari.slice().find(x => x.key == id).value;
  }
  public GetUyeGorevDurumuById(id: number): string {
    if (id != undefined && id != 0)
      return this.uyeGorevDurumlari.slice().find(x => x.key == id).value;
  }




  constructor() { }
}

export class KeyIntPairModel {
  key: number;
  value: string;
  constructor(k: number, v: string) {
    this.key = k;
    this.value = v;
  }
}
