using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Unity;
using WebApp.Persistence.Repository;
using WebApp.Persistence.Repository.ModelRepository;

namespace WebApp.Persistence.UnitOfWork
{
    public class DemoUnitOfWork : IUnitOfWork
    {
        private readonly DbContext _context;
      
        public DemoUnitOfWork(DbContext context)
        {
            _context = context;
        }

        public IPricingRepository PriceList { get; set; }
        public ILineRepository Lines { get; set; }
        public IStationRepository Stations { get; set; }
        public ITicketRepository Tickets { get; set; }
        public IVehicleRepository Vehicles { get; set; }
        public ITicketTypeRepository TicketTypes { get; set; }
        public IUserTypeRepository UserTypes { get; set; }

        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}