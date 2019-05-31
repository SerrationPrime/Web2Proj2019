namespace WebApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MinorTicketChange : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Tickets", "User_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Tickets", new[] { "User_Id" });
            AlterColumn("dbo.Tickets", "User_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.Tickets", "User_Id");
            AddForeignKey("dbo.Tickets", "User_Id", "dbo.AspNetUsers", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Tickets", "User_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Tickets", new[] { "User_Id" });
            AlterColumn("dbo.Tickets", "User_Id", c => c.String(nullable: false, maxLength: 128));
            CreateIndex("dbo.Tickets", "User_Id");
            AddForeignKey("dbo.Tickets", "User_Id", "dbo.AspNetUsers", "Id", cascadeDelete: true);
        }
    }
}
