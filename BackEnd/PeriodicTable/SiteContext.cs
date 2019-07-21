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
        public DbSet<Element> Elements { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Period> Periods { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=PeriodicTable;Trusted_Connection=True";

            optionsBuilder.UseSqlServer(connectionString);
            //.UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Element>().HasData(
                new Element
                {
                    ElementId = 1,
                    GroupdId = 1,
                    PeriodId = 1,
                    Class = "NonMetal",
                    Name = "Hydrogen",
                    Symbol = "H",
                    AtomicNumber = 1,
                    AtomicWeight = 1.07794,
                    Description = "HydrogenHydrogen",
                    Image = "https://metaphysicalexperience.files.wordpress.com/2010/06/physical-universe.jpg",
                });

            modelBuilder.Entity<Group>().HasData(
                new Group
                {
                    GroupId = 1
                });
            modelBuilder.Entity<Period>().HasData(
               new Period
               {
                   PeriodId = 1
               });
        }
    }
}
