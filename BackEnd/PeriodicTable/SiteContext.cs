using Microsoft.EntityFrameworkCore;
using PeriodicTable.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeriodicTable
{
    public class SiteContext : DbContext
    {
        DbSet<Element> Elements { get; set; }
        DbSet<Group> Groups { get; set; }
        DbSet<Period> Periods { get; set; }
    }
}
