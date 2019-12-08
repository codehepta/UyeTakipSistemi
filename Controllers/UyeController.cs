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
