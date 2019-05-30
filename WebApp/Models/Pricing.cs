
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Models
{
    [Table("PriceList")]
    public class Pricing
    {
        [Key]
        public string Id { get; set; }
        [Required]
        public int TicketTypeId { get; set; }
        public TicketType TicketType { get; set; }
        [Required]
        public int UserTypeId { get; set; }
        public UserType UserType { get; set; }
        [Required]
        public double Price { get; set; }
    }
}