import { Injectable } from '@angular/core';
import { MeslekService } from '../meslek/meslek.service';

@Injectable({
  providedIn: 'root'
})
export class UyeEkleService {
    public Meslekler
    constructor(private meslekService: MeslekService) {
    }
}
