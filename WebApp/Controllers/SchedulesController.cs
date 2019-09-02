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

    public class SchedulesController : ApiController
    {
        private IUnitOfWork db;

        public SchedulesController(IUnitOfWork db)
        {
            this.db = db;
        }

        [AllowAnonymous]
        // GET: api/Schedules
        public IQueryable<Schedule> GetSchedules()
        {
            return db.Schedules.GetAll().AsQueryable();
        }

        [AllowAnonymous]
        // GET: api/Schedules/5
        [ResponseType(typeof(Schedule))]
        public IHttpActionResult GetSchedule(string id)
        {
            Schedule schedule = db.Schedules.Get(id);
            if (schedule == null)
            {
                return NotFound();
            }

            return Ok(schedule);
        }

        // PUT: api/Schedules/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSchedule(string id, Schedule schedule)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != schedule.Id)
            {
                return BadRequest();
            }

            db.Schedules.Update(schedule);

            try
            {
                db.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ScheduleExists(id))
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

        // POST: api/Schedules
        [ResponseType(typeof(Schedule))]
        public IHttpActionResult PostSchedule(Schedule schedule)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Schedules.Add(schedule);

            try
            {
                db.Complete();
            }
            catch (DbUpdateException)
            {
                if (ScheduleExists(schedule.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = schedule.Weekday }, schedule);
        }

        // DELETE: api/Schedules/5
        [ResponseType(typeof(Schedule))]
        public IHttpActionResult DeleteSchedule(string id)
        {
            Schedule schedule = db.Schedules.Get(id);
            if (schedule == null)
            {
                return NotFound();
            }

            db.Schedules.Remove(schedule);
            db.Complete();

            return Ok(schedule);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ScheduleExists(string id)
        {
            return db.Schedules.Find(e => e.Id == id).ToList().Count > 0;
        }
    }
}