using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static UyeTakip.Data.DbEnums;

namespace UyeTakip.Data
{
    public class Kullanici
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public KullaniciTipleri KullaniciTipi { get; set; }
    }
}
