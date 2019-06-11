﻿namespace WebApp.Migrations
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

            #region TicketTypeInit

            if (!context.TicketTypes.Any(r => r.Type == "Hourly"))
            {
                var type = new TicketType();
                type.Id = 1;
                type.Type = "Hourly";
                context.TicketTypes.Add(type);
            }

            if (!context.TicketTypes.Any(r => r.Type == "Daily"))
            {
                var type = new TicketType();
                type.Id = 2;
                type.Type = "Daily";
                context.TicketTypes.Add(type);
            }

            if (!context.TicketTypes.Any(r => r.Type == "Monthly"))
            {
                var type = new TicketType();
                type.Id = 3;
                type.Type = "Monthly";
                context.TicketTypes.Add(type);
            }

            if (!context.TicketTypes.Any(r => r.Type == "Yearly"))
            {
                var type = new TicketType();
                type.Id = 4;
                type.Type = "Yearly";
                context.TicketTypes.Add(type);
            }

            #endregion TicketTypeInit

            #region UserTypeInit

            if (!context.UserTypes.Any(r => r.Type == "Normal"))
            {
                var user = new UserType();
                user.Id = 1;
                user.Type = "Normal";
                context.UserTypes.Add(user);
            }

            if (!context.UserTypes.Any(r => r.Type == "Student"))
            {
                var user = new UserType();
                user.Id = 2;
                user.Type = "Student";
                context.UserTypes.Add(user);
            }

            if (!context.UserTypes.Any(r => r.Type == "Senior"))
            {
                var user = new UserType();
                user.Id = 3;
                user.Type = "Senior";
                context.UserTypes.Add(user);
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
