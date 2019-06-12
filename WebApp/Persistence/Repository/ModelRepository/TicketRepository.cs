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

        public override Ticket Get(string id)
        {
            return context.Set<Ticket>().Include(ticket => ticket.TicketType).Include(ticket => ticket.User).SingleOrDefault(x => x.Id == id);
        }

        public override IEnumerable<Ticket> GetAll()
        {
            return context.Set<Ticket>().Include(ticket => ticket.TicketType).Include(ticket => ticket.User);
        }
    }
}