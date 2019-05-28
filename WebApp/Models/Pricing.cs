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
        [Key, Column(Order = 0)]
        [Required]
        public int TicketTypeId { get; set; }
        public TicketType TicketType { get; set; }
        [Key, Column(Order = 1)]
        [Required]
        public int UserTypeId { get; set; }
        public UserType UserType { get; set; }
        [Required]
        public double Price { get; set; }
    }
}