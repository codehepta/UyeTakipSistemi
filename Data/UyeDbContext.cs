using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UyeTakip.Data;

namespace UyeTakip.Data
{
    public class UyeDbContext : DbContext
    {
        public UyeDbContext()
        {
        }

        public UyeDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Uye> Uyeler { get; set; }
        public DbSet<Uye> Iller { get; set; }
        public DbSet<Okul> Okullar { get; set; }
        public DbSet<Meslek> Meslekler { get; set; }
        public DbSet<Kurum> Kurumlar { get; set; }

        public DbSet<Kullanici> Kullanicilar { get; set; }
        public DbSet<Gorev> Gorevler { get; set; }
        public DbSet<Fakulte> Fakulteler { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Uye>().HasData(
                new Uye()
                {
                    Id = 1,
                    AciklamaNot = "Aciklama",
                    Adi = "John",
                    Soyadi = "Doe",
                    AktifOkulId = 1,
                    DogumTarihi = DateTime.Now,
                    DogumYeri = "Ankara",
                    EgitimDurumuId = 1,
                    EpostaAdresi = "deneme@deneme.com",
                    GsmAdresi = "5305000000",
                    IkametIlcesi = 1,
                    IkametIlId = 1,
                    KurumId = 1,
                    MeslekId = 1,
                    OgrenimDurumuId = 1,
                    Resim = null,
                    SonGorevIlId = 1,
                    SonTeskilatGorevi = "",
                    SporLisansId = 1,
                    UyeGorevDurumu = DbEnums.GorevDurumu.GorevAlabilir,
                    UzmanlikBeceriler = "lorem ipsum",
                    YabanciDilId = 1,
                    YabanciDilSeviyeId = 1



                });

            modelBuilder.Entity<Kurum>().HasData(
             new Kurum() { Id = 1, Ad = "TURKSAT" },
             new Kurum() { Id = 2, Ad = "Kurum" },
             new Kurum() { Id = 3, Ad = "Serbest" },
             new Kurum() { Id = 4, Ad = "TPIC" },
             new Kurum() { Id = 5, Ad = "Milli Eğitim" },
             new Kurum() { Id = 6, Ad = "Düzce Belediyesi" },
             new Kurum() { Id = 7, Ad = "Şırnak Milli Eğitim Müdürlüğü" }
             );

            modelBuilder.Entity<Fakulte>().HasData(
           new Fakulte() { Id = 1, Ad = "İktisadi İdari Bilimler Fakültesi" },
           new Fakulte() { Id = 2, Ad = "Tıp Fakültesi" },
           new Fakulte() { Id = 3, Ad = "Hukuk Fakültesi" },
           new Fakulte() { Id = 4, Ad = "Edebiyat Fakültesi" },
           new Fakulte() { Id = 5, Ad = "Fen Fakültesi" },
           new Fakulte() { Id = 6, Ad = "Eczacılık Fakültesi" },
           new Fakulte() { Id = 7, Ad = "Diş Hekimliği Fakültesi" },
           new Fakulte() { Id = 8, Ad = "İşletme Fakültesi" },
           new Fakulte() { Id = 9, Ad = "Siyasal Bilgiler Fakültesi" },
           new Fakulte() { Id = 10, Ad = "İletişim Fakültesi" },
           new Fakulte() { Id = 11, Ad = "Su Bilimleri Fakültesi" },
           new Fakulte() { Id = 12, Ad = "İlahiyat Fakültesi" },
           new Fakulte() { Id = 13, Ad = "Açık Uzaktan Eğitim Öğrenim Fakültesi" },
           new Fakulte() { Id = 14, Ad = "Hemşirelik Fakültesi" },
           new Fakulte() { Id = 15, Ad = "Mimarlık Fakültesi" },
           new Fakulte() { Id = 16, Ad = "Mühendislik Fakültesi" }
           );

            modelBuilder.Entity<Kullanici>().HasData(
            new Kullanici() { Id = 1, Username = "admin", Password = "123456", KullaniciTipi = DbEnums.KullaniciTipleri.Admin },
            new Kullanici() { Id = 2, Username = "ilkul", Password = "123456", KullaniciTipi = DbEnums.KullaniciTipleri.Il,IlId=1 }
            );


            modelBuilder.Entity<Okul>().HasData(
          new Okul() { Id = 1, Ad = "Uluslararası Kıbrıs Üniversitesi" },
          new Okul() { Id = 2, Ad = "ABDULLAH GÜL ÜNİVERSİTESİ" },
          new Okul() { Id = 3, Ad = "ACIBADEM MEHMET ALİ AYDINLAR ÜNİVERSİTESİ" },
          new Okul() { Id = 4, Ad = "ADANA BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ" },
          new Okul() { Id = 5, Ad = "ALANYA ALAADDİN KEYKUBAT ÜNİVERSİTESİ" },
          new Okul() { Id = 6, Ad = "ALANYA HAMDULLAH EMİN PAŞA ÜNİVERSİTESİ" },
          new Okul() { Id = 7, Ad = "ALTINBAŞ ÜNİVERSİTESİ" },
          new Okul() { Id = 8, Ad = "ANKA TEKNOLOJİ ÜNİVERSİTESİ" },
          new Okul() { Id = 9, Ad = "ANKARA MÜZİK VE GÜZEL SANATLAR ÜNİVERSİTESİ" },
          new Okul() { Id = 10, Ad = "ANKARA SOSYAL BİLİMLER ÜNİVERSİTESİ" },
          new Okul() { Id = 11, Ad = "ANKARA YILDIRIM BEYAZIT ÜNİVERSİTESİ" },
          new Okul() { Id = 12, Ad = "ANTALYA AKEV ÜNİVERSİTESİ" },
          new Okul() { Id = 13, Ad = "ANTALYA BİLİM ÜNİVERSİTESİ" },
          new Okul() { Id = 14, Ad = "ARTVİN ÇORUH ÜNİVERSİTESİ" }
          );

            modelBuilder.Entity<Meslek>().HasData(
                new Meslek() { Id = 1, Ad = "Bilgisayar Mühendisi" },
                new Meslek() { Id = 2, Ad = "İnşaat Mühendisi" },
                new Meslek() { Id = 3, Ad = "Gazeteci" },
                new Meslek() { Id = 4, Ad = "Elektirik Mühendisi" },
                new Meslek() { Id = 5, Ad = "Öğretmen" });


            modelBuilder.Entity<Gorev>().HasData(
        new Gorev() { Id = 1, Ad = "Yayın Yönetmeni" },
        new Gorev() { Id = 2, Ad = "Yazar-Çizer Yetiştirme Birimi" },
        new Gorev() { Id = 3, Ad = "Fuar ve Organizasyon Birimi" },
        new Gorev() { Id = 4, Ad = "Pazarlama Birimi" },
        new Gorev() { Id = 5, Ad = "Dergi Temsilcileri ve Dağıtım Birimi" },
        new Gorev() { Id = 6, Ad = "Yayın Üretim Birimi" },
        new Gorev() { Id = 7, Ad = "İstişare Kurulu" },
        new Gorev() { Id = 8, Ad = "Teşkilat Birimi" },
        new Gorev() { Id = 9, Ad = "Sekreterya Birimi" },
        new Gorev() { Id = 10, Ad = "Akademik" },
        new Gorev() { Id = 11, Ad = "Rehberlik ve Danışmanlık Birimi" },
        new Gorev() { Id = 12, Ad = "Mali İşler Birimi" },
        new Gorev() { Id = 13, Ad = "Tanıtım ve Oto. Süreç Birimi" },
        new Gorev() { Id = 14, Ad = "Yüksek Lisans Birimi" },
        new Gorev() { Id = 15, Ad = "Doktora Birimi" },
        new Gorev() { Id = 16, Ad = "Komisyon Sekreteri" },
        new Gorev() { Id = 17, Ad = "Destek Hizmetleri Birimi" },
        new Gorev() { Id = 18, Ad = "Plan Program ve Kor. Birimi" },
        new Gorev() { Id = 19, Ad = "Genel Başkan" },
        new Gorev() { Id = 20, Ad = "Hanımlar Komisyonu" },
        new Gorev() { Id = 21, Ad = "Şube Başkanı" },
        new Gorev() { Id = 22, Ad = "İlçe Başkanı" },
        new Gorev() { Id = 23, Ad = "İzleme Birimi" }
        );
        }


    }
}


