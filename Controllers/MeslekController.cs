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
    public class MeslekController : ControllerBase
    {
        private readonly UyeDbContext _context;

        public MeslekController(UyeDbContext context)
        {
            _context = context;
        }

        // GET: api/Meslekler
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Meslek>>> GetMeslek()
        {
            return await _context.Meslekler.ToListAsync();
        }

        // GET: api/Meslekler/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Meslek>> GetMeslek(int id)
        {
            var meslek = await _context.Meslekler.FindAsync(id);

            if (meslek == null)
            {
                return NotFound();
            }

            return meslek;
        }

        // PUT: api/Meslekler/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMeslek(int id, Meslek meslek)
        {
            if (id != meslek.Id)
            {
                return BadRequest();
            }

            _context.Entry(meslek).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MeslekExists(id))
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

        // POST: api/Meslekler
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Meslek>> PostMeslek(Meslek meslek)
        {
            _context.Meslekler.Add(meslek);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMeslek", new { id = meslek.Id }, meslek);
        }

        // DELETE: api/Meslekler/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Meslek>> DeleteMeslek(int id)
        {
            var meslek = await _context.Meslekler.FindAsync(id);
            if (meslek == null)
            {
                return NotFound();
            }

            _context.Meslekler.Remove(meslek);
            await _context.SaveChangesAsync();

            return meslek;
        }

        private bool MeslekExists(int id)
        {
            return _context.Meslekler.Any(e => e.Id == id);
        }
    }
}
