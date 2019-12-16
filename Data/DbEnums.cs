using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace UyeTakip.Data
{
    public static class DbEnums
    {

        public enum GorevDurumu
        {
            [Description("Görevli")]
            Gorevli = 1,
            [Description("Görev Alabilir")]
            GorevAlabilir = 2,
            [Description("Görev Alamıyor")]
            GorevAlamiyor =3,
            [Description("Görev Almıyor")]
            GorevAlmiyor =4,
            [Description("Numara Yanlış")]
            NumaraYanlis =5
        }

        public enum KullaniciTipleri
        {
            [Description("Admin")]
            Admin = 1,
            [Description("Genel Merkez")]
            GenelMerkez = 2,
            [Description("Bölge")]
            Bolge = 3,
            [Description("Rapor")]
            Rapor = 4
            
        }
    }
}
