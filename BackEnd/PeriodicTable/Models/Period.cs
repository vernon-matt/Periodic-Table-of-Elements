using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeriodicTable.Models
{
    public class Period
    {
        public int PeriodId { get; set; }
        public virtual List<Element> Elements { get; set; }
    }
}
