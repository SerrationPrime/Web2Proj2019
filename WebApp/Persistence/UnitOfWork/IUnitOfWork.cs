using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApp.Persistence.Repository;
using WebApp.Persistence.Repository.ModelRepository;

namespace WebApp.Persistence.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IPricingRepository PriceList { get; set; }
        ILineRepository Lines { get; set; }
        IStationRepository Stations { get; set; }
        ITicketRepository Tickets { get; set; }
        IVehicleRepository Vehicles { get; set; }
        ITicketTypeRepository TicketTypes { get; set; }
        IUserTypeRepository UserTypes { get; set; }

        int Complete();
    }
}
