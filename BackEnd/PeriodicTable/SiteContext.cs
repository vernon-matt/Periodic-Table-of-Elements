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
                    GroupId = 1,
                    PeriodId = 1,
                    Class = "PN",
                    Name = "Hydrogen",
                    Symbol = "H",
                    AtomicNumber = 1,
                    AtomicWeight = 1.07794,
                    Description = "HydrogenHydrogen",
                    Image = "https://metaphysicalexperience.files.wordpress.com/2010/06/physical-universe.jpg",
                },
                new Element
                {
                    ElementId = 2,
                    GroupId = 2,
                    PeriodId = 1,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 3,
                    GroupId = 3,
                    PeriodId = 1,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 4,
                    GroupId = 4,
                    PeriodId = 1,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 5,
                    GroupId = 5,
                    PeriodId = 1,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 6,
                    GroupId = 6,
                    PeriodId = 1,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 7,
                    GroupId = 7,
                    PeriodId = 1,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 8,
                    GroupId = 8,
                    PeriodId = 1,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 9,
                    GroupId = 9,
                    PeriodId = 1,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 10,
                    GroupId = 10,
                    PeriodId = 1,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 11,
                    GroupId = 11,
                    PeriodId = 1,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 12,
                    GroupId = 12,
                    PeriodId = 1,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 13,
                    GroupId = 13,
                    PeriodId = 1,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 14,
                    GroupId = 14,
                    PeriodId = 1,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 15,
                    GroupId = 15,
                    PeriodId = 1,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 16,
                    GroupId = 16,
                    PeriodId = 1,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 17,
                    GroupId = 17,
                    PeriodId = 1,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 18,
                    GroupId = 18,
                    PeriodId = 1,
                    Class = "NG",
                    Name = "Helium",
                    Symbol = "HE",
                    AtomicNumber = 2,
                    AtomicWeight = 4.003,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 19,
                    GroupId = 1,
                    PeriodId = 2,
                    Class = "AM",
                    Name = "Lithium",
                    Symbol = "LI",
                    AtomicNumber = 3,
                    AtomicWeight = 6.941,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 20,
                    GroupId = 2,
                    PeriodId = 2,
                    Class = "AEM",
                    Name = "Beryllium",
                    Symbol = "BE",
                    AtomicNumber = 4,
                    AtomicWeight = 9.012,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 21,
                    GroupId = 3,
                    PeriodId = 2,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 22,
                    GroupId = 4,
                    PeriodId = 2,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 23,
                    GroupId = 5,
                    PeriodId = 2,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 24,
                    GroupId = 6,
                    PeriodId = 2,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 25,
                    GroupId = 7,
                    PeriodId = 2,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 26,
                    GroupId = 8,
                    PeriodId = 2,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 27,
                    GroupId = 9,
                    PeriodId = 2,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 28,
                    GroupId = 10,
                    PeriodId = 2,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 29,
                    GroupId = 11,
                    PeriodId = 2,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 30,
                    GroupId = 12,
                    PeriodId = 2,
                    Class = "NON",
                    Name = "ADD NEW",
                    Symbol = "+",
                    AtomicNumber = 1,
                    AtomicWeight = 0,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 31,
                    GroupId = 13,
                    PeriodId = 2,
                    Class = "M",
                    Name = "Boron",
                    Symbol = "B",
                    AtomicNumber = 5,
                    AtomicWeight = 10.811,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 32,
                    GroupId = 14,
                    PeriodId = 2,
                    Class = "PN",
                    Name = "Carbon",
                    Symbol = "C",
                    AtomicNumber = 6,
                    AtomicWeight = 12.011,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 33,
                    GroupId = 15,
                    PeriodId = 2,
                    Class = "PN",
                    Name = "Nitrogen",
                    Symbol = "N",
                    AtomicNumber = 7,
                    AtomicWeight = 14.007,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 34,
                    GroupId = 16,
                    PeriodId = 2,
                    Class = "PN",
                    Name = "Oxygen",
                    Symbol = "O",
                    AtomicNumber = 8,
                    AtomicWeight = 15.999,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 35,
                    GroupId = 17,
                    PeriodId = 2,
                    Class = "DN",
                    Name = "Flourine",
                    Symbol = "F",
                    AtomicNumber = 9,
                    AtomicWeight = 18.998,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 36,
                    GroupId = 18,
                    PeriodId = 2,
                    Class = "NG",
                    Name = "Neon",
                    Symbol = "Ne",
                    AtomicNumber = 10,
                    AtomicWeight = 20.180,
                    Description = "",
                    Image = "",
                });

            modelBuilder.Entity<Group>().HasData(
                new Group
                {
                    GroupId = 1
                },
                new Group
                {
                    GroupId = 2
                },
                new Group
                {
                    GroupId = 3
                },
                new Group
                {
                    GroupId = 4
                },
                new Group
                {
                    GroupId = 5
                },
                new Group
                {
                    GroupId = 6
                },
                new Group
                {
                    GroupId = 7
                },
                new Group
                {
                    GroupId = 8
                },
                new Group
                {
                    GroupId = 9
                },
                new Group
                {
                    GroupId = 10
                },
                new Group
                {
                    GroupId = 11
                },
                new Group
                {
                    GroupId = 12
                },
                new Group
                {
                    GroupId = 13
                },
                new Group
                {
                    GroupId = 14
                },
                new Group
                {
                    GroupId = 15
                },
                new Group
                {
                    GroupId = 16
                },
                new Group
                {
                    GroupId = 17
                },
                new Group
                {
                    GroupId = 18
                });

            modelBuilder.Entity<Period>().HasData(
               new Period
               {
                   PeriodId = 1
               },
               new Period
               {
                   PeriodId = 2
               },
               new Period
               {
                   PeriodId = 3
               },
               new Period
               {
                   PeriodId = 4
               },
               new Period
               {
                   PeriodId = 5
               },
               new Period
               {
                   PeriodId = 6
               },
               new Period
               {
                   PeriodId = 7
               });
        }
    }
}
