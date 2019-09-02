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
using Microsoft.AspNet.Identity;

namespace WebApp.Controllers
{
    [Authorize(Roles = "AppUser, Controller, Admin")]
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
            return db.Tickets.GetAll().AsQueryable();
        }

        // GET: api/Tickets/5
        // Note: Implement auth check on whether the authorized user owns the ticket
        [Authorize(Roles = "Controller")]
        [ResponseType(typeof(Boolean))]
        public IHttpActionResult GetTicket(string id)
        {
            Ticket ticket = db.Tickets.Get(id);
            if (ticket == null || ticket.ExpirationDate< DateTime.Now)
            {
                return Ok(false);
            }

            else return Ok(true);
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
        [AllowAnonymous]
        [ResponseType(typeof(Ticket))]
        public IHttpActionResult PostTicket([FromBody]int type)
        {
            Ticket ticket = new Ticket();

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            ticket.TicketType = db.TicketTypes.Get(type);

            //Only registered users may buy non-hourly tickets
            if (!User.Identity.IsAuthenticated) 
            {
                if (type != 1)
                {
                    return Unauthorized();
                }
                else
                {
                    ticket.User = null;
                    ticket.ExpirationDate = DateTime.Now.AddHours(1);
                }
            }
            else
            {
                //Note: should have added data on how much to add to TicketType
                ticket.User = User.Identity as ApplicationUser;
                //if (!ticket.User.IsConfirmed)
                //{
                //    return Unauthorized();
                //}
                if (type == 1)
                {
                    ticket.ExpirationDate = DateTime.Now.AddHours(1);
                }
                else if (type == 2)
                {
                    ticket.ExpirationDate = DateTime.Now.AddDays(1);
                }
                else if (type == 3)
                {
                    ticket.ExpirationDate = DateTime.Now.AddMonths(1);
                }
                else if (type == 4)
                {
                    ticket.ExpirationDate = DateTime.Now.AddYears(1); 
                }
            }

            ticket.Id = GenerateTicketId();

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

        private string GenerateTicketId()
        {
            Random rnd = new Random();
            int id = 0;
            do
            {
                id = rnd.Next(1, 1000000);
            } while (TicketExists(id.ToString()));

            return id.ToString();
        }
    }
}