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
        [Key, Column(Order = 0)]
        [Required]
        public DayOfWeek Weekday { get; set; }
        [Key, Column(Order = 1)]
        [Required]
        public Line Line { get; set; }

        public string Departures { get; set; }
    }
}