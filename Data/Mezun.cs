using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static UyeTakip.Data.DbEnums;

namespace UyeTakip.Data
{
    public class Mezun
    {
        public int Id { get; set; }

        public int MezuniyetYili{ get; set; }

        public int MezuniyetSehri { get; set; }

        public string Adi { get; set; }

        public string Soyadi { get; set; }

        public string Telefon { get; set; }

        public string Eposta { get; set; }

        public DateTime? Tarih { get; set; }

        public string DogumYeri { get; set; }

        public KanGruplari KanGrubu { get; set; }

        public int Memleketi { get; set; }

        public int IkametIlId { get; set; }
        public int IkametIlceId { get; set; }
        public string AcikAdres { get; set; }

        public int UniversiteId { get; set; }
        public int FakulteId { get; set; }

        public int BolumId { get; set; }

        public string MezuniyetOrtalamasi { get; set; }

        public string BabaAdi { get; set; }

        public string AnneAdi { get; set; }

        public string AileIrtibatTelefon { get; set; }

        public int AileIkametSehirId { get; set; }

        public int AileIkametIlceId { get; set; }

        public string AileAcikAdres { get; set; }

        public string EminEdenAdiSoyadi { get; set; }

        public string EminEdenTelefon { get; set; }

        public string MezuniyetOncesiTeskilatGorevi { get; set; }

        public  string TeskilatGorevi { get; set; }

        public string MyProperty { get; set; }
    }
}
