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
                    Class = "AEM",
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
                          },
                          new Element
                          {
                              ElementId = 73,
                              GroupId = 1,
                              PeriodId = 5,
                              Class = "AM",
                              Name = "Rubidium",
                              Symbol = "Rb",
                              AtomicNumber = 37,
                              AtomicWeight = 84.468,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 74,
                              GroupId = 2,
                              PeriodId = 5,
                              Class = "AEM",
                              Name = "Stronium",
                              Symbol = "Sr",
                              AtomicNumber = 38,
                              AtomicWeight = 87.620,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 75,
                              GroupId = 3,
                              PeriodId = 5,
                              Class = "TM",
                              Name = "Yitrium",
                              Symbol = "Y",
                              AtomicNumber = 39,
                              AtomicWeight = 86.906,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 76,
                              GroupId = 4,
                              PeriodId = 5,
                              Class = "TM",
                              Name = "Zirconium",
                              Symbol = "Zr",
                              AtomicNumber = 40,
                              AtomicWeight = 91.224,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 77,
                              GroupId = 5,
                              PeriodId = 5,
                              Class = "TM",
                              Name = "Niobium",
                              Symbol = "Nb",
                              AtomicNumber = 41,
                              AtomicWeight = 92.906,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 78,
                              GroupId = 6,
                              PeriodId = 5,
                              Class = "TM",
                              Name = "Molybdenum",
                              Symbol = "Mo",
                              AtomicNumber = 42,
                              AtomicWeight = 95.950,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 79,
                              GroupId = 7,
                              PeriodId = 5,
                              Class = "TM",
                              Name = "Technetium",
                              Symbol = "Tc",
                              AtomicNumber = 43,
                              AtomicWeight = 98.907,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 80,
                              GroupId = 8,
                              PeriodId = 5,
                              Class = "TM",
                              Name = "Ruthenium",
                              Symbol = "Ru",
                              AtomicNumber = 44,
                              AtomicWeight = 101.070,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 81,
                              GroupId = 9,
                              PeriodId = 5,
                              Class = "TM",
                              Name = "Rhodium",
                              Symbol = "Rh",
                              AtomicNumber = 45,
                              AtomicWeight = 102.906,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 82,
                              GroupId = 10,
                              PeriodId = 5,
                              Class = "TM",
                              Name = "Palladium",
                              Symbol = "Pd",
                              AtomicNumber = 46,
                              AtomicWeight = 106.420,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 83,
                              GroupId = 11,
                              PeriodId = 5,
                              Class = "TM",
                              Name = "Silver",
                              Symbol = "Ag",
                              AtomicNumber = 47,
                              AtomicWeight = 107.868,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 84,
                              GroupId = 12,
                              PeriodId = 5,
                              Class = "TM",
                              Name = "Cadmium",
                              Symbol = "Cd",
                              AtomicNumber = 48,
                              AtomicWeight = 112.411,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 85,
                              GroupId = 13,
                              PeriodId = 5,
                              Class = "PTM",
                              Name = "Indium",
                              Symbol = "n",
                              AtomicNumber = 49,
                              AtomicWeight = 114.818,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 86,
                              GroupId = 14,
                              PeriodId = 5,
                              Class = "PTM",
                              Name = "Tin",
                              Symbol = "Sn",
                              AtomicNumber = 50,
                              AtomicWeight = 118.711,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 87,
                              GroupId = 15,
                              PeriodId = 5,
                              Class = "M",
                              Name = "Antimony",
                              Symbol = "Sb",
                              AtomicNumber = 51,
                              AtomicWeight = 121.760,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 88,
                              GroupId = 16,
                              PeriodId = 5,
                              Class = "M",
                              Name = "Tellurium",
                              Symbol = "Te",
                              AtomicNumber = 52,
                              AtomicWeight = 127.600,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 89,
                              GroupId = 17,
                              PeriodId = 5,
                              Class = "DN",
                              Name = "Iodine",
                              Symbol = "I",
                              AtomicNumber = 53,
                              AtomicWeight = 126.904,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 90,
                              GroupId = 18,
                              PeriodId = 5,
                              Class = "NG",
                              Name = "Zenon",
                              Symbol = "Xe",
                              AtomicNumber = 54,
                              AtomicWeight = 131.294,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 91,
                              GroupId = 1,
                              PeriodId = 6,
                              Class = "AM",
                              Name = "Cesium",
                              Symbol = "Cs",
                              AtomicNumber = 55,
                              AtomicWeight = 132.905,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 92,
                              GroupId = 2,
                              PeriodId = 6,
                              Class = "AEM",
                              Name = "Barium",
                              Symbol = "Ba",
                              AtomicNumber = 56,
                              AtomicWeight = 137.328,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 93,
                              GroupId = 3,
                              PeriodId = 6,
                              Class = "L",
                              Name = "Lanthanides",
                              Symbol = "57-71",
                              AtomicNumber = 0,
                              AtomicWeight = 0,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 94,
                              GroupId = 4,
                              PeriodId = 6,
                              Class = "TM",
                              Name = "Hafnium",
                              Symbol = "Hf",
                              AtomicNumber = 72,
                              AtomicWeight = 178.490,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 95,
                              GroupId = 5,
                              PeriodId = 6,
                              Class = "TM",
                              Name = "Tantalum",
                              Symbol = "Ta",
                              AtomicNumber = 73,
                              AtomicWeight = 180.948,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 96,
                              GroupId = 6,
                              PeriodId = 6,
                              Class = "TM",
                              Name = "Tungsten",
                              Symbol = "W",
                              AtomicNumber = 74,
                              AtomicWeight = 183.948,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 97,
                              GroupId = 7,
                              PeriodId = 6,
                              Class = "TM",
                              Name = "Rhenium",
                              Symbol = "Re",
                              AtomicNumber = 75,
                              AtomicWeight = 186.207,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 98,
                              GroupId = 8,
                              PeriodId = 6,
                              Class = "TM",
                              Name = "Osminium",
                              Symbol = "Os",
                              AtomicNumber = 76,
                              AtomicWeight = 190.230,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 99,
                              GroupId = 9,
                              PeriodId = 6,
                              Class = "TM",
                              Name = "Iridium",
                              Symbol = "Ir",
                              AtomicNumber = 77,
                              AtomicWeight = 192.217,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 100,
                              GroupId = 10,
                              PeriodId = 6,
                              Class = "TM",
                              Name = "Platinum",
                              Symbol = "Pt",
                              AtomicNumber = 78,
                              AtomicWeight = 195.085,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 101,
                              GroupId = 11,
                              PeriodId = 6,
                              Class = "TM",
                              Name = "Gold",
                              Symbol = "Au",
                              AtomicNumber = 79,
                              AtomicWeight = 196.967,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 102,
                              GroupId = 12,
                              PeriodId = 6,
                              Class = "TM",
                              Name = "Mercury",
                              Symbol = "Hg",
                              AtomicNumber = 80,
                              AtomicWeight = 200.592,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 103,
                              GroupId = 13,
                              PeriodId = 6,
                              Class = "PTM",
                              Name = "Thallium",
                              Symbol = "Ti",
                              AtomicNumber = 81,
                              AtomicWeight = 204.383,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 104,
                              GroupId = 14,
                              PeriodId = 6,
                              Class = "PTM",
                              Name = "Lead",
                              Symbol = "Pb",
                              AtomicNumber = 82,
                              AtomicWeight = 207.200,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 105,
                              GroupId = 15,
                              PeriodId = 6,
                              Class = "PTM",
                              Name = "Bismuth",
                              Symbol = "BI",
                              AtomicNumber = 83,
                              AtomicWeight = 208.980,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 106,
                              GroupId = 16,
                              PeriodId = 6,
                              Class = "PTM",
                              Name = "Polonium",
                              Symbol = "Po",
                              AtomicNumber = 84,
                              AtomicWeight = 208.982,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 107,
                              GroupId = 17,
                              PeriodId = 6,
                              Class = "M",
                              Name = "Astatine",
                              Symbol = "At",
                              AtomicNumber = 85,
                              AtomicWeight = 208.982,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 108,
                              GroupId = 18,
                              PeriodId = 6,
                              Class = "NG",
                              Name = "Radon",
                              Symbol = "Rn",
                              AtomicNumber = 86,
                              AtomicWeight = 208.982,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 109,
                              GroupId = 1,
                              PeriodId = 7,
                              Class = "AM",
                              Name = "Francium",
                              Symbol = "Fr",
                              AtomicNumber = 87,
                              AtomicWeight = 223.020,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 110,
                              GroupId = 2,
                              PeriodId = 7,
                              Class = "AEM",
                              Name = "Radium",
                              Symbol = "Ra",
                              AtomicNumber = 88,
                              AtomicWeight = 226.025,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 111,
                              GroupId = 3,
                              PeriodId = 7,
                              Class = "A",
                              Name = "Actinides",
                              Symbol = "89-103",
                              AtomicNumber = 0,
                              AtomicWeight = 0,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 112,
                              GroupId = 4,
                              PeriodId = 7,
                              Class = "TM",
                              Name = "Rutherfordium",
                              Symbol = "Rf",
                              AtomicNumber = 104,
                              AtomicWeight = 261.000,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 113,
                              GroupId = 5,
                              PeriodId = 7,
                              Class = "TM",
                              Name = "Dubnium",
                              Symbol = "Db",
                              AtomicNumber = 105,
                              AtomicWeight = 262.000,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 114,
                              GroupId = 6,
                              PeriodId = 7,
                              Class = "TM",
                              Name = "Seaborgium",
                              Symbol = "Sg",
                              AtomicNumber = 106,
                              AtomicWeight = 266.000,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 115,
                              GroupId = 7,
                              PeriodId = 7,
                              Class = "TM",
                              Name = "Bohrlum",
                              Symbol = "Bh",
                              AtomicNumber = 107,
                              AtomicWeight = 264.000,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 116,
                              GroupId = 8,
                              PeriodId = 7,
                              Class = "TM",
                              Name = "Hasslum",
                              Symbol = "Hs",
                              AtomicNumber = 108,
                              AtomicWeight = 269.000,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 117,
                              GroupId = 9,
                              PeriodId = 7,
                              Class = "UP",
                              Name = "Meltnerium",
                              Symbol = "Mt",
                              AtomicNumber = 109,
                              AtomicWeight = 268.000,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 118,
                              GroupId = 10,
                              PeriodId = 7,
                              Class = "UP",
                              Name = "Darmstadtium",
                              Symbol = "Ds",
                              AtomicNumber = 110,
                              AtomicWeight = 269.000,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 119,
                              GroupId = 11,
                              PeriodId = 7,
                              Class = "UP",
                              Name = "Roentgenium",
                              Symbol = "Rg",
                              AtomicNumber = 111,
                              AtomicWeight = 272.000,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 120,
                              GroupId = 12,
                              PeriodId = 7,
                              Class = "TM",
                              Name = "Coperniclum",
                              Symbol = "Cn",
                              AtomicNumber = 112,
                              AtomicWeight = 277.000,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 121,
                              GroupId = 13,
                              PeriodId = 7,
                              Class = "UP",
                              Name = "Ununtrium",
                              Symbol = "Uut",
                              AtomicNumber = 113,
                              AtomicWeight = 0,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 122,
                              GroupId = 14,
                              PeriodId = 7,
                              Class = "PTM",
                              Name = "Flernovium",
                              Symbol = "Fl",
                              AtomicNumber = 114,
                              AtomicWeight = 289.000,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 123,
                              GroupId = 15,
                              PeriodId = 7,
                              Class = "UP",
                              Name = "Ununpentium",
                              Symbol = "Uup",
                              AtomicNumber = 115,
                              AtomicWeight = 0,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 124,
                              GroupId = 16,
                              PeriodId = 7,
                              Class = "UP",
                              Name = "Livermorium",
                              Symbol = "Lv",
                              AtomicNumber = 116,
                              AtomicWeight = 298.000,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 125,
                              GroupId = 17,
                              PeriodId = 7,
                              Class = "UP",
                              Name = "Ununseptium",
                              Symbol = "Uus",
                              AtomicNumber = 117,
                              AtomicWeight = 0,
                              Description = "",
                              Image = "",
                          },
                          new Element
                          {
                              ElementId = 126,
                              GroupId = 18,
                              PeriodId = 7,
                              Class = "UP",
                              Name = "Ununoctium",
                              Symbol = "Uuo",
                              AtomicNumber = 118,
                              AtomicWeight = 0,
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
