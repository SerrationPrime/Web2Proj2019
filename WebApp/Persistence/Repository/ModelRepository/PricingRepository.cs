using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.Persistence.Repository.ModelRepository
{
    public class PricingRepository : Repository<Pricing, string>, IPricingRepository
    {
        public PricingRepository(DbContext context) : base(context)
        {
        }

        public override Pricing Get(string id)
        {
            return context.Set<Pricing>().Include(price => price.TicketType).Include(price => price.UserType).SingleOrDefault(x => x.Id == id);
        }

        public override IEnumerable<Pricing> GetAll()
        {
            return context.Set<Pricing>().Include(price => price.TicketType).Include(price => price.UserType);
        }
    }
}