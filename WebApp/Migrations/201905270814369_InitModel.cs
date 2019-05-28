namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Tickets",
                c => new
                {
                    Id = c.String(nullable: false, maxLength: 128),
                    UserId = c.String(nullable: false, maxLength: 128),
                    ExpirationDate = c.DateTime(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t=>t.UserId, cascadeDelete: true).
                Index(t=> t.UserId);

            CreateTable(
                "dbo.Lines",
                c => new
                {
                    LineNumber = c.String(nullable: false, maxLength:128),
                })
                .PrimaryKey(t => t.LineNumber);

            CreateTable(
                "dbo.Stations",
                c => new
                {
                    Id = c.String(nullable: false, maxLength: 128),
                    Name = c.String(nullable: false, maxLength: 256),
                    Address = c.String(nullable: false, maxLength: 256),
                    Latitude = c.Double(nullable: false),
                    Longitude = c.Double(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "StationNameIndex");

            CreateTable(
                "dbo.StationLineConnections",
                c => new
                {
                    StationId = c.String(nullable: false, maxLength: 128),
                    LineNumber = c.String(nullable: false, maxLength: 128),
                })
                .PrimaryKey(t => new { t.StationId, t.LineNumber })
                .ForeignKey("dbo.Stations", t => t.StationId, cascadeDelete: true)
                .ForeignKey("dbo.Lines", t => t.LineNumber, cascadeDelete: true)
                .Index(t => t.StationId)
                .Index(t => t.LineNumber);

            CreateTable(
                "dbo.Vehicles",
                c => new
                {
                    Id = c.String(nullable: false, maxLength: 128),
                    LineNumber = c.String(maxLength: 128),
                    Latitude = c.Double(nullable: false),
                    Longitude = c.Double(nullable: false),
                })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Lines", t => t.LineNumber, cascadeDelete: false);

            CreateTable(
                "dbo.PriceList",
                c => new
                {
                    CardType = c.String(nullable: false, maxLength: 128),
                    UserType = c.String(nullable: false, maxLength: 128),
                    Price = c.Double(nullable:false),
                })
                .PrimaryKey(t => new { t.CardType, t.UserType });
        }
        
        public override void Down()
        {
        }
    }
}
