using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp.Models
{
    [Table("Schedules")]
    public class Schedule
    {
        [Key]
        public string Id { get; set; }
        [Required]
        public DayOfWeek Weekday { get; set; }
        [Required]
        public Line Line { get; set; }

        public string Departures { get; set; }
    }
}