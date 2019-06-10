using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    //public enum TicketType { Hourly = 0, Daily, Monthly, Yearly}

    [Table("Tickets")]
    public class Ticket
    {
        [Key]
        [Required]
        public string Id { get; set; }
        [Required]
        public TicketType TicketType { get; set; }
        public ApplicationUser User { get; set; }

        [Required]
        public DateTime ExpirationDate { get; set; }
    }
}