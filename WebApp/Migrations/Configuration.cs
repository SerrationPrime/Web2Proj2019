namespace WebApp.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using WebApp.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<WebApp.Persistence.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(WebApp.Persistence.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.

            if (!context.Roles.Any(r => r.Name == "Admin"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "Admin" };

                manager.Create(role);
            }

            if (!context.Roles.Any(r => r.Name == "Controller"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "Controller" };

                manager.Create(role);
            }

            if (!context.Roles.Any(r => r.Name == "AppUser"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "AppUser" };

                manager.Create(role);
            }

            #region InitialElements

            var type1 = new TicketType
            {
                Id = 1,
                Type = "Hourly"
            };
            var type2 = new TicketType
            {
                Id = 2,
                Type = "Daily"
            };
            var type3 = new TicketType
            {
                Id = 3,
                Type = "Monthly"
            };
            var type4 = new TicketType
            {
                Id = 4,
                Type = "Yearly"
            };

            var user1 = new UserType
            {
                Id = 1,
                Type = "Normal"
            };
            var user2 = new UserType
            {
                Id = 2,
                Type = "Student"
            };
            var user3 = new UserType
            {
                Id = 3,
                Type = "Senior"
            };

            var price1 = new Pricing
            {
                Price = 55.00,
                TicketType = type1,
                TicketTypeId = type1.Id,
                UserType = user1,
                UserTypeId = user1.Id
            };
            price1.Id = price1.TicketTypeId.ToString() + price1.UserTypeId.ToString();
            var price2 = new Pricing
            {
                Price = 36.66,
                TicketType = type1,
                TicketTypeId = type1.Id,
                UserType = user2,
                UserTypeId = user2.Id
            };
            price2.Id = price2.TicketTypeId.ToString() + price2.UserTypeId.ToString();
            var price3 = new Pricing
            {
                Price = 36.66,
                TicketType = type1,
                TicketTypeId = type1.Id,
                UserType = user3,
                UserTypeId = user3.Id
            };
            price3.Id = price3.TicketTypeId.ToString() + price3.UserTypeId.ToString();
            var price4 = new Pricing
            {
                Price = 155.00,
                TicketType = type2,
                TicketTypeId = type2.Id,
                UserType = user1,
                UserTypeId = user1.Id
            };
            price4.Id = price4.TicketTypeId.ToString() + price4.UserTypeId.ToString();
            var price5 = new Pricing
            {
                Price = 103.33,
                TicketType = type2,
                TicketTypeId = type2.Id,
                UserType = user2,
                UserTypeId = user2.Id
            };
            price5.Id = price5.TicketTypeId.ToString() + price5.UserTypeId.ToString();
            var price6 = new Pricing
            {
                Price = 103.33,
                TicketType = type2,
                TicketTypeId = type2.Id,
                UserType = user3,
                UserTypeId = user3.Id
            };
            price6.Id = price6.TicketTypeId.ToString() + price6.UserTypeId.ToString();
            var price7 = new Pricing
            {
                Price = 550.00,
                TicketType = type3,
                TicketTypeId = type3.Id,
                UserType = user1,
                UserTypeId = user1.Id
            };
            price7.Id = price7.TicketTypeId.ToString() + price7.UserTypeId.ToString();
            var price8 = new Pricing
            {
                Price = 366.66,
                TicketType = type3,
                TicketTypeId = type3.Id,
                UserType = user2,
                UserTypeId = user2.Id
            };
            price8.Id = price8.TicketTypeId.ToString() + price8.UserTypeId.ToString();
            var price9 = new Pricing
            {
                Price = 366.66,
                TicketType = type3,
                TicketTypeId = type3.Id,
                UserType = user3,
                UserTypeId = user3.Id
            };
            price9.Id = price9.TicketTypeId.ToString() + price9.UserTypeId.ToString();
            var price10 = new Pricing
            {
                Price = 1550.00,
                TicketType = type4,
                TicketTypeId = type4.Id,
                UserType = user1,
                UserTypeId = user1.Id
            };
            price10.Id = price10.TicketTypeId.ToString() + price10.UserTypeId.ToString();
            var price11 = new Pricing
            {
                Price = 1003.33,
                TicketType = type4,
                TicketTypeId = type4.Id,
                UserType = user2,
                UserTypeId = user2.Id
            };
            price11.Id = price11.TicketTypeId.ToString() + price11.UserTypeId.ToString();
            var price12 = new Pricing
            {
                Price = 1003.33,
                TicketType = type4,
                TicketTypeId = type4.Id,
                UserType = user3,
                UserTypeId = user3.Id
            };
            price12.Id = price12.TicketTypeId.ToString() + price12.UserTypeId.ToString();

            #endregion InitialElements

            #region Stations

            var station1 = new Station
            {
                Address = "Bulevar Oslobodjenja, Novi Sad",
                Id = "1",
                Name = "Stanica Limanski Park",
                Latitude = 45.241079,
                Longitude = 19.842824
            };
            var station2 = new Station()
            {
                Address = "Skolska, Sremska Kamenica",
                Id = "2",
                Name = "Stanica Sremska Kamenica",
                Latitude = 45.2223462,
                Longitude = 19.842572
            };
            var station3 = new Station()
            {
                Address = "Bulevar Oslobodjenja, Novi Sad",
                Id = "3",
                Name = "Stanica Futoska",
                Latitude = 45.252854,
                Longitude = 19.836652
            };
            var station4 = new Station()
            {
                Address = "Bulevar Oslobodjenja, Novi Sad",
                Id = "4",
                Name = "Stanica Merkator",
                Latitude = 45.244367,
                Longitude = 19.841400
            };

            #endregion Stations

            #region Lines

            var line1 = new Line
            {
                LineNumber = "1",
                Stations = new List<Station>()
            };
            var line2 = new Line
            {
                LineNumber = "2",
                Stations = new List<Station>()
            };

            #endregion Lines

            #region Vehicles

            var vehicle1 = new Vehicle
            {
                Id = "1",
                Latitude = 45.2223462,
                Longitude = 19.842572,
                Line = line1
            };
            var vehicle2 = new Vehicle
            {
                Id = "2",
                Latitude = 45.2223462,
                Longitude = 19.842572,
                Line = line2
            };

            #endregion Vehicles

            #region Schedule

            var schedule1 = new Schedule
            {
                Line = line1,
                Id = "1",
                Weekday = DayOfWeek.Monday,
                Departures = "Merkator XX:00 Futoška XX:30"
            };

            var schedule2 = new Schedule
            {
                Line = line2,
                Id = "2",
                Weekday = DayOfWeek.Tuesday,
                Departures = "Limanski park XX:00 Sremska Kamenica XX:30"
            };

            #endregion Schedule

            #region ListAdding

            line1.Stations.Add(station3);
            line1.Stations.Add(station4);
            line2.Stations.Add(station1);
            line2.Stations.Add(station2);

            #endregion ListAdding

            #region TicketTypeInit

            if (!context.TicketTypes.Any(r => r.Type == type1.Type))
            {
                context.TicketTypes.Add(type1);
            }

            if (!context.TicketTypes.Any(r => r.Type == type2.Type))
            {
                context.TicketTypes.Add(type2);
            }

            if (!context.TicketTypes.Any(r => r.Type == type3.Type))
            {
                context.TicketTypes.Add(type3);
            }

            if (!context.TicketTypes.Any(r => r.Type == type4.Type))
            {
                context.TicketTypes.Add(type4);
            }

            #endregion TicketTypeInit

            #region UserTypeInit

            if (!context.UserTypes.Any(r => r.Type == user1.Type))
            {
                context.UserTypes.Add(user1);
            }

            if (!context.UserTypes.Any(r => r.Type == user2.Type))
            {
                context.UserTypes.Add(user2);
            }

            if (!context.UserTypes.Any(r => r.Type == user3.Type))
            {
                context.UserTypes.Add(user3);
            }

            #endregion UserTypeInit

            #region PriceInit

            if (!(context.PriceList.Any(r => r.TicketType.Type == price1.TicketType.Type && r.UserType.Type == price1.UserType.Type)))
            {
                context.PriceList.Add(price1);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == price2.TicketType.Type && r.UserType.Type == price2.UserType.Type)))
            {
                context.PriceList.Add(price2);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == price3.TicketType.Type && r.UserType.Type == price3.UserType.Type)))
            {
                context.PriceList.Add(price3);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == price4.TicketType.Type && r.UserType.Type == price4.UserType.Type)))
            {
                context.PriceList.Add(price4);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == price5.TicketType.Type && r.UserType.Type == price5.UserType.Type)))
            {
                context.PriceList.Add(price5);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == price6.TicketType.Type && r.UserType.Type == price6.UserType.Type)))
            {
                context.PriceList.Add(price6);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == price7.TicketType.Type && r.UserType.Type == price7.UserType.Type)))
            {
                context.PriceList.Add(price7);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == price8.TicketType.Type && r.UserType.Type == price8.UserType.Type)))
            {
                context.PriceList.Add(price8);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == price9.TicketType.Type && r.UserType.Type == price9.UserType.Type)))
            {
                context.PriceList.Add(price9);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == price10.TicketType.Type && r.UserType.Type == price10.UserType.Type)))
            {
                context.PriceList.Add(price10);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == price11.TicketType.Type && r.UserType.Type == price11.UserType.Type)))
            {
                context.PriceList.Add(price11);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == price12.TicketType.Type && r.UserType.Type == price12.UserType.Type)))
            {
                context.PriceList.Add(price12);
            }

            #endregion PriceInit

            #region StationInit

            if (!(context.Stations.Any(r => r.Name == station1.Name)))
            {
                context.Stations.Add(station1);
            }

            if (!(context.Stations.Any(r => r.Name == station2.Name)))
            {
                context.Stations.Add(station2);
            }

            if (!(context.Stations.Any(r => r.Name == station3.Name)))
            {
                context.Stations.Add(station3);
            }

            if (!(context.Stations.Any(r => r.Name == station4.Name)))
            {
                context.Stations.Add(station4);
            }

            #endregion StationInit

            #region LineInit

            if (!(context.Lines.Any(r => r.LineNumber == line1.LineNumber)))
            {
                context.Lines.Add(line1);
            }

            if (!(context.Lines.Any(r => r.LineNumber == line2.LineNumber)))
            {
                context.Lines.Add(line2);
            }

            #endregion LineInit

            #region VehicleInit

            if (!(context.Vehicles.Any(r => r.Id == vehicle1.Id)))
            {
                context.Vehicles.Add(vehicle1);
            }

            if (!(context.Vehicles.Any(r => r.Id == vehicle2.Id)))
            {
                context.Vehicles.Add(vehicle2);
            }

            #endregion LineInit

            #region ScheduleInit

            if (!(context.Schedules.Any(r => r.Id == "1")))
            {
                context.Schedules.Add(schedule1);
            }

            if (!(context.Schedules.Any(r => r.Id == "2")))
            {
                context.Schedules.Add(schedule2);
            }

            #endregion ScheduleInit

            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new UserManager<ApplicationUser>(userStore);

            if (!context.Users.Any(u => u.UserName == "admin@yahoo.com"))
            {
                var user = new ApplicationUser() { Id = "admin", UserName = "admin@yahoo.com", Email = "admin@yahoo.com", PasswordHash = ApplicationUser.HashPassword("Admin123!") };
                userManager.Create(user);
                userManager.AddToRole(user.Id, "Admin");
            }

            if (!context.Users.Any(u => u.UserName == "appu@yahoo.com"))
            { 
                var user = new ApplicationUser() { Id = "appu", UserName = "appu@yahoo.com", Email = "appu@yahoo.com", PasswordHash = ApplicationUser.HashPassword("Appu123!") };
                userManager.Create(user);
                userManager.AddToRole(user.Id, "AppUser");
            }
        }
    }
}
