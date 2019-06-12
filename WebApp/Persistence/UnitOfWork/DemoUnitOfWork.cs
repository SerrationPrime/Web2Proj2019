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
            context.Configuration.LazyLoadingEnabled = false;
        }
        [Dependency]
        public IPricingRepository PriceList { get; set; }
        [Dependency]
        public ILineRepository Lines { get; set; }
        [Dependency]
        public IStationRepository Stations { get; set; }
        [Dependency]
        public ITicketRepository Tickets { get; set; }
        [Dependency]
        public IScheduleRepository Schedules { get; set; }
        [Dependency]
        public IVehicleRepository Vehicles { get; set; }
        [Dependency]
        public ITicketTypeRepository TicketTypes { get; set; }
        [Dependency]
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