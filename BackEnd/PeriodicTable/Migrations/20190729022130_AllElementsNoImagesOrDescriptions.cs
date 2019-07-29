using Microsoft.EntityFrameworkCore.Migrations;

namespace PeriodicTable.Migrations
{
    public partial class AllElementsNoImagesOrDescriptions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 1,
                column: "Description",
                value: "Hydrogen is the chemical element with the symbol H and atomic number 1.With a standard atomic weight of 1.008, hydrogen is the lightest element in the periodic table. Hydrogen is the most abundant chemical substance in the Universe, constituting roughly 75 % of all baryonic mass. [7][note 1] Non - remnant stars are mainly composed of hydrogen in the plasma state. The most common isotope of hydrogen, termed protium(name rarely used, symbol 1H), has one proton and no neutrons. -Wikipedia");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 1,
                column: "Description",
                value: "HydrogenHydrogen");
        }
    }
}
