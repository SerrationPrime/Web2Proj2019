using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.Persistence.Repository.ModelRepository
{
    public class VehicleRepository : Repository<Vehicle, string>, IVehicleRepository
    {
        public VehicleRepository(DbContext context) : base(context)
        {
        }

        public override Vehicle Get(string id)
        {
            return context.Set<Vehicle>().Include(s => s.Line).SingleOrDefault(x => x.Id == id);
        }

        public override IEnumerable<Vehicle> GetAll()
        {
            return context.Set<Vehicle>().Include(vehicle => vehicle.Line);
        }
    }
}