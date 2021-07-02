using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace fedjobs.Models
{
    public class Job
    {
        public int Id { get; set; }

        
        public int UserId { get; set; }

        [Required]
        [MaxLength(50)]
        
        public string JobId { get; set; }

        [Required]
        [MaxLength(50)]
        public string Link { get; set; }

        [Required]
        
        [MaxLength(255)]
        public string Location { get; set; }

        public string Organization { get; set; }
        public string Department { get; set; }
        public string Category { get; set; }
        public string Schedule { get; set; }
        public string Requirements { get; set; }
        public string Duties { get; set; }
        public DateTime DateOpened { get; set; }

        public DateTime DateClose { get; set; }

        public string Education { get; set; }
    }

}
