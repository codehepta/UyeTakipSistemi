import { UyeModel } from "./uye.model";
import { UyeService } from "./uye.service";
import { IlService } from "../shared/il.service";
import { OkulService } from "../okul/okul.service";
import { KurumService } from "../kurum/kurum.service";
import { MeslekService } from "../meslek/meslek.service";

export class UyeGosterModel extends UyeModel {

    ikametIlIdString: string="";
    ikametIlcesiString: string="";

    constructor(model:UyeModel
        //private meslekService: MeslekService,
        //private kurumService: KurumService,
        //private okulService: OkulService,
        //private ilService: IlService,
        //private uyeService: UyeService 
    )

    {
        super();
    }
}
