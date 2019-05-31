namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class BaseModel : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.PriceList");
            DropPrimaryKey("dbo.Schedules");
            AddColumn("dbo.PriceList", "Id", c => c.String(nullable: false, maxLength: 128));
            AddColumn("dbo.Schedules", "Id", c => c.String(nullable: false, maxLength: 128));
            AddPrimaryKey("dbo.PriceList", "Id");
            AddPrimaryKey("dbo.Schedules", "Id");
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.Schedules");
            DropPrimaryKey("dbo.PriceList");
            DropColumn("dbo.Schedules", "Id");
            DropColumn("dbo.PriceList", "Id");
            AddPrimaryKey("dbo.Schedules", "Weekday");
            AddPrimaryKey("dbo.PriceList", new[] { "TicketTypeId", "UserTypeId" });
        }
    }
}
