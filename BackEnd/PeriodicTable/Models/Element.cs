using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeriodicTable.Models
{
    public class Element
    {
        public int ElementId { get; set; }
        public int AtomicNumber { get; set; }
        public string Symbol { get; set; }
        public string Name { get; set; }
        public double AtomicWeight { get; set; }
        public string Class { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        //public virtual Group Group { get; set; }
        public int GroupId { get; set; }
        //public virtual Period Period { get; set; }
        public int PeriodId { get; set; }
        public string Phase { get; set; } 
        public string Image2 { get; set; }
    }
}
