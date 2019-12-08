using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UyeTakip.Data
{
    public class Uye
    {

        public int Id { get; set; }
        public string Adi { get; set; }
        public string Soyadi { get; set; }

        public string GsmAdresi { get; set; }

        public string EpostaAdresi { get; set; }


        public int IkametIlId { get; set; }
        //public Il UyeIkametIl { get; set; }

        public int IkametIlcesi { get; set; }

        public string DogumYeri { get; set; }

        public DateTime DogumTarihi { get; set; }


       // public Meslek UyeMeslek { get; set; }
        public int MeslekId { get; set; }

        public int KurumId { get; set; }
        //public Kurum UyeKurum { get; set; }

        public int EgitimDurumuId { get; set; }

        public int OgrenimDurumuId { get; set; }

        public int AktifOkulId { get; set; }

        public int YabanciDilId  { get; set; }

        public int YabanciDilSeviyeId { get; set; }

        public int SporLisansId { get; set; }

        public string UzmanlikBeceriler { get; set; }

        public DbEnums.GorevDurumu UyeGorevDurumu { get; set; }
        public byte[] Resim { get; set; }

        public string AciklamaNot { get; set; }

        public string SonTeskilatGorevi { get; set; }

        public int SonGorevIlId { get; set; }







    }
}
