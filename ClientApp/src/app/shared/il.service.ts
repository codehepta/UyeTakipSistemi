import { Injectable } from '@angular/core';
import *  as  data from './ilceler.json';
import { IlModel } from './il.model';
import { IlceModel } from './ilce.model.js';

@Injectable({
  providedIn: 'root'
})
export class IlService {
    iller: IlModel[] = [
        new IlModel(1, 'ADANA'),
        new IlModel(2, 'ADIYAMAN'),
        new IlModel(3, 'AFYONKARAHİSAR'),
        new IlModel(4, 'AĞRI'),
        new IlModel(5, 'AMASYA'),
        new IlModel(6, 'ANKARA'),
        new IlModel(7, 'ANTALYA'),
        new IlModel(8, 'ARTVİN'),
        new IlModel(9, 'AYDIN'),
        new IlModel(10, 'BALIKESİR'),
        new IlModel(11, 'BİLECİKK'),
        new IlModel(12, 'BİNGÖL'),
        new IlModel(13, 'BİTLİS'),
        new IlModel(14, 'BOLU'),
        new IlModel(15, 'BURDUR'),
        new IlModel(16, 'BURSA'),
        new IlModel(17, 'ÇANAKKALE'),
        new IlModel(18, 'ÇANKIRI'),
        new IlModel(19, 'ÇORUM'),
        new IlModel(20, 'DENİZLİ'),
        new IlModel(21, 'DİYARBAKIR'),
        new IlModel(22, 'EDİRNE'),
        new IlModel(23, 'ELAZIĞ'),
        new IlModel(24, 'ERZİNCAN'),
        new IlModel(25, 'ERZURUM'),
        new IlModel(26, 'ESKİŞEHİR'),
        new IlModel(27, 'GAZİANTEP'),
        new IlModel(28, 'GİRESUN'),
        new IlModel(29, 'GÜMÜŞHANE'),
        new IlModel(30, 'HAKKARİ'),
        new IlModel(31, 'HATAY'),
        new IlModel(32, 'ISPARTA'),
        new IlModel(33, 'MERSİN'),
        new IlModel(34, 'İSTANBUL'),
        new IlModel(35, 'İZMİR'),
        new IlModel(36, 'KARS'),
        new IlModel(37, 'KASTAMONU'),
        new IlModel(38, 'KAYSERİ'),
        new IlModel(39, 'KIRKLARELİ'),
        new IlModel(40, 'KIRŞEHİR'),
        new IlModel(41, 'KOCAELİ'),
        new IlModel(42, 'KONYA'),
        new IlModel(43, 'KÜTAHYA'),
        new IlModel(44, 'MALATYA'),
        new IlModel(45, 'MANİSA'),
        new IlModel(46, 'KAHRAMANMARAŞ'),
        new IlModel(47, 'MARDİN'),
        new IlModel(48, 'MUĞLA'),
        new IlModel(49, 'MUŞ'),
        new IlModel(50, 'NEVŞEHİR'),
        new IlModel(51, 'NİĞDE'),
        new IlModel(52, 'ORDU'),
        new IlModel(53, 'RİZE'),
        new IlModel(54, 'SAKARYA'),
        new IlModel(55, 'SAMSUN'),
        new IlModel(56, 'SİİRT'),
        new IlModel(57, 'SİNOP'),
        new IlModel(58, 'SİVAS'),
        new IlModel(59, 'TEKİRDAĞ'),
        new IlModel(60, 'TOKAT'),
        new IlModel(61, 'TRABZON'),
        new IlModel(62, 'TUNCELİ'),
        new IlModel(63, 'ŞANLIURFA'),
        new IlModel(64, 'UŞAK'),
        new IlModel(65, 'VAN'),
        new IlModel(66, 'YOZGAT'),
        new IlModel(67, 'ZONGULDAK'),
        new IlModel(68, 'AKSARAY'),
        new IlModel(69, 'BAYBURT'),
        new IlModel(70, 'KARAMAN'),
        new IlModel(71, 'KIRIKKALE'),
        new IlModel(72, 'BATMAN'),
        new IlModel(73, 'ŞIRNAK'),
        new IlModel(74, 'BARTIN'),
        new IlModel(75, 'ARDAHAN'),
        new IlModel(76, 'IĞDIR'),
        new IlModel(77, 'YALOVA'),
        new IlModel(78, 'KARABüK'),
        new IlModel(79, 'KİLİS'),
        new IlModel(80, 'OSMANİYE'),
        new IlModel(81, 'DÜZCE')
    ];
  ilceler: IlceModel[] = (((data as any).default) as IlceModel[]);

    public Get(): IlModel[] {

        return this.iller.slice();
    }

    public GetIlceleri(pId:number): IlceModel[] {
        
        this.ilceler = (((data as any).default) as IlceModel[]);

        let ilcesecim = this.ilceler.slice().
            filter(
                r => r.il_id === pId.toString()
        );
        return ilcesecim;
    }

    public GetIlAdi(pId:number): string {
        if(pId!= undefined && pId != 0)
        return this.iller.find(x => x.id == pId).ad;
    }

    public GetIlceAdi(pId: number): string {
      if (pId != undefined && pId != 0) {
        let m: any = this.ilceler.find(x => +x.id == pId);
        if(m!=null)
          return m.name;
      }
            
    }



}
