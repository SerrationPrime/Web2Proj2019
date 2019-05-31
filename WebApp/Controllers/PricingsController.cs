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
    public class PricingsController : ApiController
    {

        private IUnitOfWork db;

        public PricingsController(IUnitOfWork db)
        {
            this.db = db;
        }

        [AllowAnonymous]
        // GET: api/Pricings
        public IQueryable<Pricing> GetPriceList()
        {
            return (IQueryable<Pricing>)db.PriceList;
        }

        [AllowAnonymous]
        // GET: api/Pricings/5
        [ResponseType(typeof(Pricing))]
        public IHttpActionResult GetPricing(string id)
        {
            Pricing pricing = db.PriceList.Get(id);
            if (pricing == null)
            {
                return NotFound();
            }

            return Ok(pricing);
        }

        // PUT: api/Pricings/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPricing(string id, Pricing pricing)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pricing.Id)
            {
                return BadRequest();
            }

            db.PriceList.Update(pricing);

            try
            {
                db.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PricingExists(id))
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

        // POST: api/Pricings
        [ResponseType(typeof(Pricing))]
        public IHttpActionResult PostPricing(Pricing pricing)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PriceList.Add(pricing);

            try
            {
                db.Complete();
            }
            catch (DbUpdateException)
            {
                if (PricingExists(pricing.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pricing.TicketTypeId }, pricing);
        }

        // DELETE: api/Pricings/5
        [ResponseType(typeof(Pricing))]
        public IHttpActionResult DeletePricing(string id)
        {
            Pricing pricing = db.PriceList.Get(id);
            if (pricing == null)
            {
                return NotFound();
            }

            db.PriceList.Remove(pricing);
            db.Complete();

            return Ok(pricing);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PricingExists(string id)
        {
            return db.PriceList.Find(e => e.Id == id).ToList().Count > 0;
        }
    }
}