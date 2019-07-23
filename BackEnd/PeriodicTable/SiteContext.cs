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
                },
                new Element
                {
                    ElementId = 37,
                    GroupId = 1,
                    PeriodId = 3,
                    Class = "AM",
                    Name = "Sodium",
                    Symbol = "Na",
                    AtomicNumber = 11,
                    AtomicWeight = 22.990,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 38,
                    GroupId = 2,
                    PeriodId = 3,
                    Class = "TM",
                    Name = "Magnesium",
                    Symbol = "Mg",
                    AtomicNumber = 12,
                    AtomicWeight = 24.305,
                    Description = "",
                    Image = "",
                },
                new Element
                {
                    ElementId = 39,
                    GroupId = 3,
                    PeriodId = 3,
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
                     ElementId = 40,
                     GroupId = 4,
                     PeriodId = 3,
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
                      ElementId = 41,
                      GroupId = 5,
                      PeriodId = 3,
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
                       ElementId = 42,
                       GroupId = 6,
                       PeriodId = 3,
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
                        ElementId = 43,
                        GroupId = 7,
                        PeriodId = 3,
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
                         ElementId = 44,
                         GroupId = 8,
                         PeriodId = 3,
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
                          ElementId = 45,
                          GroupId = 9,
                          PeriodId = 3,
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
                           ElementId = 46,
                           GroupId = 10,
                           PeriodId = 3,
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
                            ElementId = 47,
                            GroupId = 11,
                            PeriodId = 3,
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
                             ElementId = 48,
                             GroupId = 12,
                             PeriodId = 3,
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
                              ElementId = 49,
                              GroupId = 13,
                              PeriodId = 3,
                              Class = "PTM",
                              Name = "Aluminum",
                              Symbol = "Al",
                              AtomicNumber = 13,
                              AtomicWeight = 26.982,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 50,
                              GroupId = 14,
                              PeriodId = 3,
                              Class = "M",
                              Name = "Silicon",
                              Symbol = "Si",
                              AtomicNumber = 14,
                              AtomicWeight = 28.066,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 51,
                              GroupId = 15,
                              PeriodId = 3,
                              Class = "PN",
                              Name = "Phosphorus",
                              Symbol = "P",
                              AtomicNumber = 15,
                              AtomicWeight = 30.974,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 52,
                              GroupId = 16,
                              PeriodId = 3,
                              Class = "PN",
                              Name = "Sulfur",
                              Symbol = "S",
                              AtomicNumber = 16,
                              AtomicWeight = 32.066,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 53,
                              GroupId = 17,
                              PeriodId = 3,
                              Class = "DN",
                              Name = "Chlorine",
                              Symbol = "Al",
                              AtomicNumber = 17,
                              AtomicWeight = 35.453,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 54,
                              GroupId = 18,
                              PeriodId = 3,
                              Class = "NG",
                              Name = "Argon",
                              Symbol = "Ar",
                              AtomicNumber = 18,
                              AtomicWeight = 39.948,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 55,
                              GroupId = 1,
                              PeriodId = 4,
                              Class = "AM",
                              Name = "Potassium",
                              Symbol = "K",
                              AtomicNumber = 19,
                              AtomicWeight = 39.098,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 56,
                              GroupId = 2,
                              PeriodId = 4,
                              Class = "AEM",
                              Name = "Calcium",
                              Symbol = "Ca",
                              AtomicNumber = 20,
                              AtomicWeight = 40.078,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 57,
                              GroupId = 3,
                              PeriodId = 4,
                              Class = "TM",
                              Name = "Scandium",
                              Symbol = "Sc",
                              AtomicNumber = 21,
                              AtomicWeight = 44.956,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 58,
                              GroupId = 4,
                              PeriodId = 4,
                              Class = "TM",
                              Name = "Titanium",
                              Symbol = "Ti",
                              AtomicNumber = 22,
                              AtomicWeight = 47.867,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 59,
                              GroupId = 5,
                              PeriodId = 4,
                              Class = "TM",
                              Name = "Vanadium",
                              Symbol = "V",
                              AtomicNumber = 23,
                              AtomicWeight = 50.942,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 60,
                              GroupId = 6,
                              PeriodId = 4,
                              Class = "TM",
                              Name = "Chromium",
                              Symbol = "Cr",
                              AtomicNumber = 24,
                              AtomicWeight = 51.996,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 61,
                              GroupId = 7,
                              PeriodId = 4,
                              Class = "TM",
                              Name = "Manganese",
                              Symbol = "Mn",
                              AtomicNumber = 25,
                              AtomicWeight = 54.938,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 62,
                              GroupId = 8,
                              PeriodId = 4,
                              Class = "TM",
                              Name = "Iron",
                              Symbol = "Fe",
                              AtomicNumber = 26,
                              AtomicWeight = 55.845,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 63,
                              GroupId = 9,
                              PeriodId = 4,
                              Class = "TM",
                              Name = "Cobalt",
                              Symbol = "Co",
                              AtomicNumber = 27,
                              AtomicWeight = 58.933,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 64,
                              GroupId = 10,
                              PeriodId = 4,
                              Class = "TM",
                              Name = "Nickel",
                              Symbol = "Ni",
                              AtomicNumber = 28,
                              AtomicWeight = 58.693,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 65,
                              GroupId = 11,
                              PeriodId = 4,
                              Class = "TM",
                              Name = "Copper",
                              Symbol = "Cu",
                              AtomicNumber = 29,
                              AtomicWeight = 63.546,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 66,
                              GroupId = 12,
                              PeriodId = 4,
                              Class = "TM",
                              Name = "Zinc",
                              Symbol = "Zn",
                              AtomicNumber = 30,
                              AtomicWeight = 65.380,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 67,
                              GroupId = 13,
                              PeriodId = 4,
                              Class = "PTM",
                              Name = "Gallium",
                              Symbol = "Ga",
                              AtomicNumber = 31,
                              AtomicWeight = 69.723,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 68,
                              GroupId = 14,
                              PeriodId = 4,
                              Class = "M",
                              Name = "Germanium",
                              Symbol = "Ge",
                              AtomicNumber = 32,
                              AtomicWeight = 72.631,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 69,
                              GroupId = 15,
                              PeriodId = 4,
                              Class = "M",
                              Name = "Arsenic",
                              Symbol = "As",
                              AtomicNumber = 33,
                              AtomicWeight = 74.922,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 70,
                              GroupId = 16,
                              PeriodId = 4,
                              Class = "PN",
                              Name = "Selenium",
                              Symbol = "Se",
                              AtomicNumber = 34,
                              AtomicWeight = 78.971,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 71,
                              GroupId = 17,
                              PeriodId = 4,
                              Class = "DN",
                              Name = "Bromine",
                              Symbol = "Br",
                              AtomicNumber = 35,
                              AtomicWeight = 79.904,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 72,
                              GroupId = 18,
                              PeriodId = 4,
                              Class = "NG",
                              Name = "Krypton",
                              Symbol = "Kr",
                              AtomicNumber = 36,
                              AtomicWeight = 83.798,
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
