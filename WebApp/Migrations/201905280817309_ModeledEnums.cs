namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ModeledEnums : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.PriceList");
            CreateTable(
                "dbo.TicketTypes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Type = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.UserTypes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Type = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.PriceList", "TicketTypeId", c => c.Int(nullable: false));
            AddColumn("dbo.PriceList", "UserTypeId", c => c.Int(nullable: false));
            AddColumn("dbo.Tickets", "TicketType_Id", c => c.Int(nullable: false));
            AddColumn("dbo.AspNetUsers", "UserType_Id", c => c.Int());
            AddPrimaryKey("dbo.PriceList", new[] { "TicketTypeId", "UserTypeId" });
            CreateIndex("dbo.PriceList", "TicketTypeId");
            CreateIndex("dbo.PriceList", "UserTypeId");
            CreateIndex("dbo.Tickets", "TicketType_Id");
            CreateIndex("dbo.AspNetUsers", "UserType_Id");
            AddForeignKey("dbo.PriceList", "TicketTypeId", "dbo.TicketTypes", "Id", cascadeDelete: true);
            AddForeignKey("dbo.PriceList", "UserTypeId", "dbo.UserTypes", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Tickets", "TicketType_Id", "dbo.TicketTypes", "Id", cascadeDelete: true);
            AddForeignKey("dbo.AspNetUsers", "UserType_Id", "dbo.UserTypes", "Id");
            DropColumn("dbo.PriceList", "Type");
            DropColumn("dbo.PriceList", "UserClass");
            DropColumn("dbo.Tickets", "TicketType");
            DropColumn("dbo.AspNetUsers", "UserType");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AspNetUsers", "UserType", c => c.Int(nullable: false));
            AddColumn("dbo.Tickets", "TicketType", c => c.Int(nullable: false));
            AddColumn("dbo.PriceList", "UserClass", c => c.Int(nullable: false));
            AddColumn("dbo.PriceList", "Type", c => c.Int(nullable: false));
            DropForeignKey("dbo.AspNetUsers", "UserType_Id", "dbo.UserTypes");
            DropForeignKey("dbo.Tickets", "TicketType_Id", "dbo.TicketTypes");
            DropForeignKey("dbo.PriceList", "UserTypeId", "dbo.UserTypes");
            DropForeignKey("dbo.PriceList", "TicketTypeId", "dbo.TicketTypes");
            DropIndex("dbo.AspNetUsers", new[] { "UserType_Id" });
            DropIndex("dbo.Tickets", new[] { "TicketType_Id" });
            DropIndex("dbo.PriceList", new[] { "UserTypeId" });
            DropIndex("dbo.PriceList", new[] { "TicketTypeId" });
            DropPrimaryKey("dbo.PriceList");
            DropColumn("dbo.AspNetUsers", "UserType_Id");
            DropColumn("dbo.Tickets", "TicketType_Id");
            DropColumn("dbo.PriceList", "UserTypeId");
            DropColumn("dbo.PriceList", "TicketTypeId");
            DropTable("dbo.UserTypes");
            DropTable("dbo.TicketTypes");
            AddPrimaryKey("dbo.PriceList", new[] { "Type", "UserClass" });
        }
    }
}
