namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Lines",
                c => new
                    {
                        LineNumber = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.LineNumber);
            
            CreateTable(
                "dbo.Stations",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false),
                        Address = c.String(nullable: false),
                        Latitude = c.Double(nullable: false),
                        Longitude = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.PriceList",
                c => new
                    {
                        Type = c.Int(nullable: false),
                        UserClass = c.Int(nullable: false),
                        Price = c.Double(nullable: false),
                    })
                .PrimaryKey(t => new { t.Type, t.UserClass });
            
            CreateTable(
                "dbo.Schedules",
                c => new
                    {
                        Weekday = c.Int(nullable: false),
                        Departures = c.String(),
                        Line_LineNumber = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.Weekday, t.Line_LineNumber})
                .ForeignKey("dbo.Lines", t => t.Line_LineNumber, cascadeDelete: true)
                .Index(t => t.Line_LineNumber);
            
            CreateTable(
                "dbo.Tickets",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        TicketType = c.Int(nullable: false),
                        ExpirationDate = c.DateTime(nullable: false),
                        User_Id = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.User_Id, cascadeDelete: true)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.Vehicles",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Latitude = c.Double(nullable: false),
                        Longitude = c.Double(nullable: false),
                        Line_LineNumber = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Lines", t => t.Line_LineNumber)
                .Index(t => t.Line_LineNumber);
            
            CreateTable(
                "dbo.StationLines",
                c => new
                    {
                        Station_Id = c.String(nullable: false, maxLength: 128),
                        Line_LineNumber = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.Station_Id, t.Line_LineNumber })
                .ForeignKey("dbo.Stations", t => t.Station_Id, cascadeDelete: true)
                .ForeignKey("dbo.Lines", t => t.Line_LineNumber, cascadeDelete: true)
                .Index(t => t.Station_Id)
                .Index(t => t.Line_LineNumber);
            
            AddColumn("dbo.AspNetUsers", "UserType", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Vehicles", "Line_LineNumber", "dbo.Lines");
            DropForeignKey("dbo.Tickets", "User_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.Schedules", "Line_LineNumber", "dbo.Lines");
            DropForeignKey("dbo.StationLines", "Line_LineNumber", "dbo.Lines");
            DropForeignKey("dbo.StationLines", "Station_Id", "dbo.Stations");
            DropIndex("dbo.StationLines", new[] { "Line_LineNumber" });
            DropIndex("dbo.StationLines", new[] { "Station_Id" });
            DropIndex("dbo.Vehicles", new[] { "Line_LineNumber" });
            DropIndex("dbo.Tickets", new[] { "User_Id" });
            DropIndex("dbo.Schedules", new[] { "Line_LineNumber" });
            DropColumn("dbo.AspNetUsers", "UserType");
            DropTable("dbo.StationLines");
            DropTable("dbo.Vehicles");
            DropTable("dbo.Tickets");
            DropTable("dbo.Schedules");
            DropTable("dbo.PriceList");
            DropTable("dbo.Stations");
            DropTable("dbo.Lines");
        }
    }
}
