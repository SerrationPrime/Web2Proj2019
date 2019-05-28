using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApp.Models;

namespace WebApp.Persistence.Repository.ModelRepository
{
    public class TicketRepository : Repository<Ticket, string>, ITicketRepository
    {
        public TicketRepository(DbContext context) : base(context)
        {
        }
    }
}