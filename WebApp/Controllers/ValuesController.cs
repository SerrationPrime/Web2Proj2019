using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.CompilerServices;
using System.Web.Http;
using WebApp.Persistence.UnitOfWork;

namespace WebApp.Controllers
{
    [Authorize]
    public class ValuesController : ApiController
    {
        public IUnitOfWork Db { get; set; }
        public ValuesController(IUnitOfWork db)
        {
            Db = db;
        }

        // GET api/values
        public IEnumerable<string> Get()
        {
            Db.PriceList.Add();
            Db.Lines.Add();
            Db.Stations.Add();
            Db.Tickets.Add();
            Db.Vehicles.Add();
            Db.TicketTypes.Add();
            Db.UserTypes.Add();
            Db.Complete();
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
