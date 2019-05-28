using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Models
{
    [Table("Lines")]
    public class Line
    {
        [Required]
        [Key]
        public string LineNumber { get; set; }
        public ICollection<Station> Stations { get; set; }
    }
}