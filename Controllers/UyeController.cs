using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UyeTakip.Data;
using UyeTakip.ViewModels;

namespace UyeTakip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UyeController : ControllerBase
    {
        private readonly UyeDbContext _context;

        public UyeController(UyeDbContext context)
        {
            _context = context;
        }

        // GET: api/Uye
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Uye>>> GetUyeler()
        {
            return await _context.Uyeler.ToListAsync();
        }

        // GET: api/UyeGorevDurumlar
        [HttpGet("GetUyeGorevDurumlar")]
        //[Route("api/[controller]/GetUyeGorevDurumlar")]
        public async Task<ActionResult<IEnumerable<KeyValueModel>>> GetUyeGorevDurumlar()
        {
            var durumlar = await _context.Uyeler

                .GroupBy(t => t.UyeGorevDurumu)
                .Select(s =>
                    //new ValueTuple<string, int>(
                    //    Enum.GetName(typeof(DbEnums.GorevDurumu), s.Key),
                    //    s.Count())
                    new   { s.Key, Value = s.Count() }
                )
                .ToListAsync();

            return durumlar.Select(s => new KeyValueModel() { Key = Enum.GetName(typeof(DbEnums.GorevDurumu), s.Key), Value = s.Value }).ToList(); ;
        }

        // GET: api/UyeGorevDurumlar
        [HttpGet("GetUyeIller")]
        //[Route("api/[controller]/GetUyeGorevDurumlar")]
        public async Task<ActionResult<IEnumerable<KeyValueModel>>> GetUyeIller()
        {
            var durumlar = await _context.Uyeler

                .GroupBy(t => t.IkametIlId)
                .Select(s =>
                    //new ValueTuple<string, int>(
                    //    Enum.GetName(typeof(DbEnums.GorevDurumu), s.Key),
                    //    s.Count())
                    new { s.Key, Value = s.Count() }
                )
                .ToListAsync();

            return durumlar.Select(s => new KeyValueModel() { Key = s.Key.ToString(), Value = s.Value }).ToList(); ;
        }

        // GET: api/Uye/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Uye>> GetUye(int id)
        {
            var uye = await _context.Uyeler.FindAsync(id);

            if (uye == null)
            {
                return NotFound();
            }

            return uye;
        }

        // PUT: api/Uye/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUye(int id, Uye uye)
        {
            if (id != uye.Id)
            {
                return BadRequest();
            }

            _context.Entry(uye).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UyeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Uye
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Uye>> PostUye(Uye uye)
        {
            _context.Uyeler.Add(uye);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUye", new { id = uye.Id }, uye);
        }

        // DELETE: api/Uye/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Uye>> DeleteUye(int id)
        {
            var uye = await _context.Uyeler.FindAsync(id);
            if (uye == null)
            {
                return NotFound();
            }

            _context.Uyeler.Remove(uye);
            await _context.SaveChangesAsync();

            return uye;
        }

        private bool UyeExists(int id)
        {
            return _context.Uyeler.Any(e => e.Id == id);
        }
    }
}
