
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

   
    public TypeFix() {
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
    }




   }
