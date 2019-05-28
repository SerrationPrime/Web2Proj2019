using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.Persistence.Repository.ModelRepository
{
    public class PricingRepository : Repository<Pricing, int>, IPricingRepository
    {
        public PricingRepository(DbContext context) : base(context)
        {
        }
    }
}