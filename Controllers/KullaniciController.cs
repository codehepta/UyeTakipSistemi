using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UyeTakip.Data;

namespace UyeTakip.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KullaniciController : ControllerBase
    {
        private readonly UyeDbContext _context;

        public KullaniciController(UyeDbContext context)
        {
            _context = context;
        }

        // GET: api/Kullanici
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Kullanici>>> GetKullanici()
        {
            return await _context.Kullanici.ToListAsync();
        }

        // GET: api/Kullanici/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Kullanici>> GetKullanici(int id)
        {
            var kullanici = await _context.Kullanici.FindAsync(id);

            if (kullanici == null)
            {
                return NotFound();
            }

            return kullanici;
        }

        // PUT: api/Kullanici/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKullanici(int id, Kullanici kullanici)
        {
            if (id != kullanici.Id)
            {
                return BadRequest();
            }

            _context.Entry(kullanici).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KullaniciExists(id))
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

        // POST: api/Kullanici
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Kullanici>> PostKullanici(Kullanici kullanici)
        {
            _context.Kullanici.Add(kullanici);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKullanici", new { id = kullanici.Id }, kullanici);
        }

        // DELETE: api/Kullanici/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Kullanici>> DeleteKullanici(int id)
        {
            var kullanici = await _context.Kullanici.FindAsync(id);
            if (kullanici == null)
            {
                return NotFound();
            }

            _context.Kullanici.Remove(kullanici);
            await _context.SaveChangesAsync();

            return kullanici;
        }

        private bool KullaniciExists(int id)
        {
            return _context.Kullanici.Any(e => e.Id == id);
        }
    }
}
