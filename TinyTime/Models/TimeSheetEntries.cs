using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace TinyTime.Models
{
    public class TimeSheetEntries
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string UserId { get; set; }
        [Required]
        public string StartTime { get; set; }
        [Required]
        public string EndTime { get; set; }
        public string comment { get; set; }

        public virtual ICollection<AspNetUsers> AspNetUserss { get; set; }
    }
}