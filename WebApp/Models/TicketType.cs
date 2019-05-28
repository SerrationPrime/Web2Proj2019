using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    [Table("TicketTypes")]
    public class TicketType
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Type { get; set; }
    }
}