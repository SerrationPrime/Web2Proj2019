using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.Persistence.Repository.ModelRepository
{
    public class StationRepository : Repository<Station, string>, IStationRepository
    {
        public StationRepository(DbContext context) : base(context)
        {
        }

        public override Station Get(string id)
        {
            return context.Set<Station>().Include(s => s.Lines).SingleOrDefault(x => x.Id == id);
        }

        public override IEnumerable<Station> GetAll()
        {
            return context.Set<Station>().Include(station => station.Lines);
        }
    }
}