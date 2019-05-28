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
    }
}