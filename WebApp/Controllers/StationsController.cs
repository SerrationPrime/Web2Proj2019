﻿using System;
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
    [System.Web.Http.Cors.EnableCors(origins: "localhost:4200", headers: "*", methods: "*")]
    public class StationsController : ApiController
    {
        private IUnitOfWork db;

        public StationsController(IUnitOfWork db)
        {
            this.db = db;
        }

        [AllowAnonymous]
        // GET: api/Stations
        public IQueryable<Station> GetStations()
        {
            return db.Stations.GetAll().AsQueryable();
        }

        [AllowAnonymous]
        // GET: api/Stations/5
        [ResponseType(typeof(Station))]
        public IHttpActionResult GetStation(string id)
        {
            Station station = db.Stations.Get(id);
            if (station == null)
            {
                return NotFound();
            }

            return Ok(station);
        }

        // PUT: api/Stations/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStation(string id, Station station)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != station.Id)
            {
                return BadRequest();
            }

            db.Stations.Update(station);

            try
            {
                db.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StationExists(id))
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

        // POST: api/Stations
        [ResponseType(typeof(Station))]
        public IHttpActionResult PostStation(Station station)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Stations.Add(station);

            try
            {
                db.Complete();
            }
            catch (DbUpdateException)
            {
                if (StationExists(station.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = station.Id }, station);
        }

        // DELETE: api/Stations/5
        [ResponseType(typeof(Station))]
        public IHttpActionResult DeleteStation(string id)
        {
            Station station = db.Stations.Get(id);
            if (station == null)
            {
                return NotFound();
            }

            db.Stations.Remove(station);
            db.Complete();

            return Ok(station);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StationExists(string id)
        {
            return db.Stations.Find(e => e.Id == id).ToList().Count > 0;
        }
    }
}