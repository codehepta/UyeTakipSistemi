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
            [Description("Il")]
            Il = 3,
            [Description("Rapor")]
            Rapor = 4
            
        }

        public enum KanGruplari
        {
            [Description("A+")]
            Aa = 1,
            [Description("A-")]
            Ae = 2,
            [Description("B+")]
            Ba = 3,
            [Description("B-")]
            Be = 4,
            [Description("AB+")]
            ABa = 5,
            [Description("AB-")]
            ABe = 6,
            [Description("0+")]
            Oa = 7,
            [Description("0-")]
            Oe =8
        }
    }
}
