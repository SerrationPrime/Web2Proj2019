using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.Persistence.Repository.ModelRepository
{
    public class ScheduleRepository : Repository<Schedule, string>, IScheduleRepository
    {
        public ScheduleRepository(DbContext context) : base(context)
        {
        }

        public override Schedule Get(string id)
        {
            return context.Set<Schedule>().Include(vehicle => vehicle.Line).SingleOrDefault(x => x.Id == id);
        }

        public override IEnumerable<Schedule> GetAll()
        {
            return context.Set<Schedule>().Include(vehicle => vehicle.Line);
        }
    }
}