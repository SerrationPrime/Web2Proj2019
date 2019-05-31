using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApp.Models;
using WebApp.Persistence;
using WebApp.Persistence.UnitOfWork;

namespace WebApp.Controllers
{
    [Authorize(Roles = "Admin")]
    public class LinesController : ApiController
    {
        private IUnitOfWork db;

        public LinesController(IUnitOfWork db)
        {
            this.db = db;
        }

        [AllowAnonymous]
        // GET: api/Lines
        public IQueryable<Line> GetLines()
        {
            return (IQueryable<Line>)db.Lines;
        }

        [AllowAnonymous]
        // GET: api/Lines/5
        [ResponseType(typeof(Line))]
        public IHttpActionResult GetLine(string id)
        {
            Line line = db.Lines.Get(id);
            if (line == null)
            {
                return NotFound();
            }

            return Ok(line);
        }

        // PUT: api/Lines/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutLine(string id, Line line)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != line.LineNumber)
            {
                return BadRequest();
            }

            db.Lines.Update(line);

            try
            {
                db.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LineExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Lines
        [ResponseType(typeof(Line))]
        public IHttpActionResult PostLine(Line line)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Lines.Add(line);

            try
            {
                db.Complete();
            }
            catch (DbUpdateException)
            {
                if (LineExists(line.LineNumber))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = line.LineNumber }, line);
        }

        // DELETE: api/Lines/5
        [ResponseType(typeof(Line))]
        public IHttpActionResult DeleteLine(string id)
        {
            Line line = db.Lines.Get(id);
            if (line == null)
            {
                return NotFound();
            }

            db.Lines.Remove(line);
            db.Complete();

            return Ok(line);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LineExists(string id)
        {
            return db.Lines.Find(e => e.LineNumber == id).ToList().Count > 0;
        }
    }
}