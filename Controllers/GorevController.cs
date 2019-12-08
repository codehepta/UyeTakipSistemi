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
    public class GorevController : ControllerBase
    {
        private readonly UyeDbContext _context;

        public GorevController(UyeDbContext context)
        {
            _context = context;
        }

        // GET: api/Gorevler
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Gorev>>> GetGorev()
        {
            return await _context.Gorevler.ToListAsync();
        }

        // GET: api/Gorevler/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Gorev>> GetGorev(int id)
        {
            var gorev = await _context.Gorevler.FindAsync(id);

            if (gorev == null)
            {
                return NotFound();
            }

            return gorev;
        }

        // PUT: api/Gorevler/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGorev(int id, Gorev gorev)
        {
            if (id != gorev.Id)
            {
                return BadRequest();
            }

            _context.Entry(gorev).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GorevExists(id))
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

        // POST: api/Gorevler
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Gorev>> PostGorev(Gorev gorev)
        {
            _context.Gorevler.Add(gorev);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGorev", new { id = gorev.Id }, gorev);
        }

        // DELETE: api/Gorevler/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Gorev>> DeleteGorev(int id)
        {
            var gorev = await _context.Gorevler.FindAsync(id);
            if (gorev == null)
            {
                return NotFound();
            }

            _context.Gorevler.Remove(gorev);
            await _context.SaveChangesAsync();

            return gorev;
        }

        private bool GorevExists(int id)
        {
            return _context.Gorevler.Any(e => e.Id == id);
        }
    }
}
