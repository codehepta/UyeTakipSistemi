
export class UyeModel {
  id: number;
  adi: string;
  soyadi: string;
  gsmAdresi: string;
  epostaAdresi: string;
  ikametIlId: number = 0;
  ikametIlcesi: number = 0;
  dogumYeri: string;
  dogumTarihi: string;
  meslekId: number = 0;
  kurumId: number = 0;
  egitimDurumuId: number = 0;
  ogrenimDurumuId: number = 0;
  aktifOkulId: number = 0;
  yabanciDilId: number = 0;
  yabanciDilSeviyeId: number = 0;
  sporLisansId: number = 0;
  uzmanlikBeceriler: string;
  uyeGorevDurumu: number = 0;
  resim?: any;
  aciklamaNot: string;
  sonTeskilatGorevi: string;
  sonGorevIlId: number = 0;


  public TypeFixModelValidate(): string[] {
    let errors: string[] = [];
    if (this.ikametIlId != undefined) this.ikametIlId = +this.ikametIlId;
    if (this.ikametIlcesi != undefined) this.ikametIlcesi = +this.ikametIlcesi;
    if (this.meslekId != undefined) this.meslekId = +this.meslekId;
    if (this.kurumId != undefined) this.kurumId = +this.kurumId;
    if (this.egitimDurumuId != undefined) this.egitimDurumuId = +this.egitimDurumuId;
    if (this.ogrenimDurumuId != undefined) this.ogrenimDurumuId = +this.ogrenimDurumuId;
    if (this.aktifOkulId != undefined) this.aktifOkulId = +this.aktifOkulId;
    if (this.yabanciDilId != undefined) this.yabanciDilId = +this.yabanciDilId;
    if (this.yabanciDilSeviyeId != undefined) this.yabanciDilSeviyeId = +this.yabanciDilSeviyeId;
    if (this.sporLisansId != undefined) this.sporLisansId = +this.sporLisansId;
    if (this.uyeGorevDurumu != undefined) this.uyeGorevDurumu = +this.uyeGorevDurumu;
    if (this.sonGorevIlId != undefined) this.sonGorevIlId = +this.sonGorevIlId;

    if (this.ikametIlId < 1) errors.push("İkamet ili girilmelidir.");
    if (this.ikametIlcesi < 1) errors.push("İkamet ilçesi girilmelidir.");
    if (this.meslekId < 1) errors.push("Meslek  seçilmelidir.");
    if (this.kurumId < 1) errors.push("Kurumu girilmelidir.");
    if (this.egitimDurumuId < 1) errors.push("Eğitim durumu girilmelidir.");
    if (this.ogrenimDurumuId < 1) errors.push("Öğrenim durumu girilmelidir.");
    if (this.aktifOkulId < 1) errors.push("Okul bilgisi girilmelidir.");
    if (this.yabanciDilId < 1) errors.push("Yabancı Dili girilmelidir.");
    if (this.yabanciDilSeviyeId < 1) errors.push("İkamet ili girilmelidir.");
    if (this.sporLisansId < 1) errors.push("Spor lisansı girilmelidir.");
    if (this.uyeGorevDurumu < 1) errors.push("Üye Görev Durumu girilmelidir.");
    if (this.sonGorevIlId < 1) errors.push("son görev ili girilmelidir.");
    return errors;
  }




}
