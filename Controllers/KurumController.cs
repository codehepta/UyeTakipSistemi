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
    public class KurumController : ControllerBase
    {
        private readonly UyeDbContext _context;

        public KurumController(UyeDbContext context)
        {
            _context = context;
        }

        // GET: api/Kurumlar
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Kurum>>> GetKurum()
        {
            return await _context.Kurumlar.ToListAsync();
        }

        // GET: api/Kurumlar/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Kurum>> GetKurum(int id)
        {
            var kurum = await _context.Kurumlar.FindAsync(id);

            if (kurum == null)
            {
                return NotFound();
            }

            return kurum;
        }

        // PUT: api/Kurumlar/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKurum(int id, Kurum kurum)
        {
            if (id != kurum.Id)
            {
                return BadRequest();
            }

            _context.Entry(kurum).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KurumExists(id))
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

        // POST: api/Kurumlar
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Kurum>> PostKurum(Kurum kurum)
        {
            _context.Kurumlar.Add(kurum);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKurum", new { id = kurum.Id }, kurum);
        }

        // DELETE: api/Kurumlar/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Kurum>> DeleteKurum(int id)
        {
            var kurum = await _context.Kurumlar.FindAsync(id);
            if (kurum == null)
            {
                return NotFound();
            }

            _context.Kurumlar.Remove(kurum);
            await _context.SaveChangesAsync();

            return kurum;
        }

        private bool KurumExists(int id)
        {
            return _context.Kurumlar.Any(e => e.Id == id);
        }
    }
}
