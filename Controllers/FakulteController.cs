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
    public class FakulteController : ControllerBase
    {
        private readonly UyeDbContext _context;

        public FakulteController(UyeDbContext context)
        {
            _context = context;
        }

        // GET: api/Fakulteler
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Fakulte>>> GetFakulte()
        {
            return await _context.Fakulteler.ToListAsync();
        }

        // GET: api/Fakulteler/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Fakulte>> GetFakulte(int id)
        {
            var fakulte = await _context.Fakulteler.FindAsync(id);

            if (fakulte == null)
            {
                return NotFound();
            }

            return fakulte;
        }

        // PUT: api/Fakulteler/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFakulte(int id, Fakulte fakulte)
        {
            if (id != fakulte.Id)
            {
                return BadRequest();
            }

            _context.Entry(fakulte).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FakulteExists(id))
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

        // POST: api/Fakulteler
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Fakulte>> PostFakulte(Fakulte fakulte)
        {
            if (_context.Fakulteler.Any(a => a.Ad == fakulte.Ad))
            {
                return ValidationProblem("Daha önce kayıt edilmiş");
            }
            _context.Fakulteler.Add(fakulte);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFakulte", new { id = fakulte.Id }, fakulte);
        }

        // DELETE: api/Fakulteler/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Fakulte>> DeleteFakulte(int id)
        {
            var fakulte = await _context.Fakulteler.FindAsync(id);
            if (fakulte == null)
            {
                return NotFound();
            }

            _context.Fakulteler.Remove(fakulte);
            await _context.SaveChangesAsync();

            return fakulte;
        }

        private bool FakulteExists(int id)
        {
            return _context.Fakulteler.Any(e => e.Id == id);
        }
    }
}
