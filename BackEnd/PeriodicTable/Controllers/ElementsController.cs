using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PeriodicTable;
using PeriodicTable.Models;

namespace PeriodicTable.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ElementsController : ControllerBase
    {
        private readonly SiteContext _context;

        public ElementsController(SiteContext context)
        {
            _context = context;
        }

        // GET: api/Elements
        [HttpGet]
        public IEnumerable<Element> GetElements()
        {
            return _context.Elements;
        }

        // GET: api/Elements/Class
        [HttpGet("{Class}")]
        public IEnumerable<Element> GetElementsByClass([FromRoute(Name = "Class")] string Class)
        {            
            return _context.Elements.Where(e => e.Class == Class);
        }

        // GET: api/Elements/id
        [HttpGet("element/{id}")]
        public Element GetElementById([FromRoute] int id)
        {
            return _context.Elements.Single(e=> e.ElementId == id);
        }

        // PUT: api/Elements/5
    
        [HttpPut("{id}")]
        public async Task<Element> PutElement([FromRoute] int id, [FromBody] Element element)
        {
            _context.Entry(element).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return _context.Elements.Single(e=> e.ElementId == id);
        }
        
        // POST: api/Elements
        [HttpPost]
        public async Task<IActionResult> PostElement([FromBody] Element element)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Elements.Add(element);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetElement", new { id = element.ElementId }, element);
        }

        // DELETE: api/Elements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteElement([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var element = await _context.Elements.FindAsync(id);
            if (element == null)
            {
                return NotFound();
            }

            _context.Elements.Remove(element);
            await _context.SaveChangesAsync();

            return Ok(element);
        }

        private bool ElementExists(int id)
        {
            return _context.Elements.Any(e => e.ElementId == id);
        }
    }
}