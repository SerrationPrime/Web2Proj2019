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
    [Authorize(Roles = "AppUser")]
    public class TicketsController : ApiController
    {
        private IUnitOfWork db;

        public TicketsController(IUnitOfWork db)
        {
            this.db = db;
        }

        [Authorize(Roles = "Admin")]
        // GET: api/Tickets
        public IQueryable<Ticket> GetTickets()
        {
            return (IQueryable<Ticket>)db.Tickets;
        }

        // GET: api/Tickets/5
        // Note: Implement auth check on whether the authorized user owns the ticket
        [ResponseType(typeof(Ticket))]
        public IHttpActionResult GetTicket(string id)
        {
            Ticket ticket = db.Tickets.Get(id);
            if (ticket == null)
            {
                return NotFound();
            }

            return Ok(ticket);
        }

        [Authorize(Roles = "Admin")]
        // PUT: api/Tickets/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTicket(string id, Ticket ticket)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != ticket.Id)
            {
                return BadRequest();
            }

            db.Tickets.Update(ticket);

            try
            {
                db.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TicketExists(id))
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

        // POST: api/Tickets
        [ResponseType(typeof(Ticket))]
        public IHttpActionResult PostTicket(Ticket ticket)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //Only registered users may buy non-hourly tickets
            if (!System.Web.HttpContext.Current.User.Identity.IsAuthenticated) 
            {
                if (ticket.TicketType.Id != 0)
                {
                    return Unauthorized();
                }
                else
                {
                    ticket.User = null;
                }
            }

            db.Tickets.Add(ticket);

            try
            {
                db.Complete();
            }
            catch (DbUpdateException)
            {
                if (TicketExists(ticket.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = ticket.Id }, ticket);
        }

        [Authorize(Roles = "Administrator")]
        // DELETE: api/Tickets/5
        [ResponseType(typeof(Ticket))]
        public IHttpActionResult DeleteTicket(string id)
        {
            Ticket ticket = db.Tickets.Get(id);
            if (ticket == null)
            {
                return NotFound();
            }

            db.Tickets.Remove(ticket);
            db.Complete();

            return Ok(ticket);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TicketExists(string id)
        {
            return db.Tickets.Find(e => e.Id == id).ToList().Count > 0;
        }
    }
}