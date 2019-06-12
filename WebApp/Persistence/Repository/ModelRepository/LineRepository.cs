using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.Persistence.Repository.ModelRepository
{
    public class LineRepository : Repository<Line, string>, ILineRepository
    {
        public LineRepository(DbContext context) : base(context)
        {
            
        }

        public override IEnumerable<Line> GetAll()
        {
            return context.Set<Line>().Include(line => line.Stations);
        }

        public override Line Get(string id)
        {
            return context.Set<Line>().Include(s => s.Stations).SingleOrDefault(x => x.LineNumber == id);
        }

        public override IEnumerable<Line> GetAll()
        {
            return context.Set<Line>().Include(line => line.Stations);
        }
    }
}