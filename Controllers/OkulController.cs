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
    public class OkulController : ControllerBase
    {
        private readonly UyeDbContext _context;

        public OkulController(UyeDbContext context)
        {
            _context = context;
        }

        // GET: api/Okullar
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Okul>>> GetOkul()
        {
            return await _context.Okullar.ToListAsync();
        }

        // GET: api/Okullar/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Okul>> GetOkul(int id)
        {
            var okul = await _context.Okullar.FindAsync(id);

            if (okul == null)
            {
                return NotFound();
            }

            return okul;
        }

        // PUT: api/Okullar/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOkul(int id, Okul okul)
        {
            if (id != okul.Id)
            {
                return BadRequest();
            }

            _context.Entry(okul).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OkulExists(id))
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

        // POST: api/Okullar
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Okul>> PostOkul(Okul okul)
        {
            _context.Okullar.Add(okul);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOkul", new { id = okul.Id }, okul);
        }

        // DELETE: api/Okullar/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Okul>> DeleteOkul(int id)
        {
            var okul = await _context.Okullar.FindAsync(id);
            if (okul == null)
            {
                return NotFound();
            }

            _context.Okullar.Remove(okul);
            await _context.SaveChangesAsync();

            return okul;
        }

        private bool OkulExists(int id)
        {
            return _context.Okullar.Any(e => e.Id == id);
        }
    }
}
