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

            #region TicketTypeInit

            if (!context.TicketTypes.Any(r => r.Type == "Hourly"))
            {
                context.TicketTypes.Add(type1);
            }

            if (!context.TicketTypes.Any(r => r.Type == "Daily"))
            {
                context.TicketTypes.Add(type2);
            }

            if (!context.TicketTypes.Any(r => r.Type == "Monthly"))
            {
                context.TicketTypes.Add(type3);
            }

            if (!context.TicketTypes.Any(r => r.Type == "Yearly"))
            {
                context.TicketTypes.Add(type4);
            }

            #endregion TicketTypeInit

            #region UserTypeInit

            if (!context.UserTypes.Any(r => r.Type == "Normal"))
            {
                context.UserTypes.Add(user1);
            }

            if (!context.UserTypes.Any(r => r.Type == "Student"))
            {
                context.UserTypes.Add(user2);
            }

            if (!context.UserTypes.Any(r => r.Type == "Senior"))
            {
                context.UserTypes.Add(user3);
            }

            #endregion UserTypeInit

            #region StationInit

            Station Stop1 = new Station
            {
                Latitude = 45.242268,
                Longitude = 19.842954,
                Address = "Bulevar Oslobođenja 133",
                Name = "Jugodrvo",
                Id = "1"
            };

            Station Stop2 = new Station
            {
                Latitude = 45.243300,
                Longitude = 19.842954,
                Address = "Alpha test",
                Name = "Alpha",
                Id = "2"
            };

            Station Stop3 = new Station
            {
                Latitude = 45.243300,
                Longitude = 19.843100,
                Address = "Beta test",
                Name = "Beta",
                Id = "3"
            };

            Line BaseLine = new Line
            {
                LineNumber = "1A",
                Stations = new List<Station>()
            };
            BaseLine.Stations.Add(Stop1);
            BaseLine.Stations.Add(Stop2);
            BaseLine.Stations.Add(Stop3);

            if (!context.Stations.Any(r => r.Id == "1"))
            {
                context.Stations.Add(Stop1);
            }
            if (!context.Stations.Any(r => r.Id == "2"))
            {
                context.Stations.Add(Stop2);
            }
            if (!context.Stations.Any(r => r.Id == "3"))
            {
                context.Stations.Add(Stop3);
            }

            if (!context.Lines.Any(r => r.LineNumber == "1A"))
            {
                context.Lines.Add(BaseLine);
            }

            #endregion
            #region PriceInit

            if (!(context.PriceList.Any(r => r.TicketType.Type == "Hourly") && context.PriceList.Any(r => r.UserType.Type == "Normal")))
            {
                context.PriceList.Add(price1);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == "Hourly") && context.PriceList.Any(r => r.UserType.Type == "Student")))
            {
                context.PriceList.Add(price2);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == "Hourly") && context.PriceList.Any(r => r.UserType.Type == "Senior")))
            {
                context.PriceList.Add(price3);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == "Daily") && context.PriceList.Any(r => r.UserType.Type == "Normal")))
            {
                context.PriceList.Add(price4);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == "Daily") && context.PriceList.Any(r => r.UserType.Type == "Student")))
            {
                context.PriceList.Add(price5);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == "Daily") && context.PriceList.Any(r => r.UserType.Type == "Senior")))
            {
                context.PriceList.Add(price6);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == "Monthly") && context.PriceList.Any(r => r.UserType.Type == "Normal")))
            {
                context.PriceList.Add(price7);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == "Monthly") && context.PriceList.Any(r => r.UserType.Type == "Student")))
            {
                context.PriceList.Add(price8);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == "Monthly") && context.PriceList.Any(r => r.UserType.Type == "Senior")))
            {
                context.PriceList.Add(price9);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == "Yearly") && context.PriceList.Any(r => r.UserType.Type == "Normal")))
            {
                context.PriceList.Add(price10);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == "Yearly") && context.PriceList.Any(r => r.UserType.Type == "Student")))
            {
                context.PriceList.Add(price11);
            }

            if (!(context.PriceList.Any(r => r.TicketType.Type == "Yearly") && context.PriceList.Any(r => r.UserType.Type == "Senior")))
            {
                context.PriceList.Add(price12);
            }

            #endregion PriceInit

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
