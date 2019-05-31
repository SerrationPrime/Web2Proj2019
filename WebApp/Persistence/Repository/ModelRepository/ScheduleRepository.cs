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
    }
}