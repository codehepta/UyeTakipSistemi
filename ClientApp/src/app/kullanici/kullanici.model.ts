export class KullaniciModel {
  id: number;
  username: string;
  password: string;
  kullaniciTipi: number;
  ilId: number;



  get getkullaniciTipi(): string {
    switch (this.kullaniciTipi) {
      case 1:
        return "Admin";
      case 2:
        return "Genel Merkez";
      case 3:
        return "İl";
      case 4:
        return "Rapor";
      default:
        return 'N/A';
    }
  }

}


