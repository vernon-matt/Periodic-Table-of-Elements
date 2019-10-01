using Microsoft.EntityFrameworkCore.Migrations;

namespace PeriodicTable.Migrations
{
    public partial class lithum : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 1,
                column: "Image",
                value: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Hydrogen_discharge_tube.jpg/1920px-Hydrogen_discharge_tube.jpg");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 19,
                columns: new[] { "Class", "Description", "Image", "Image2", "Phase" },
                values: new object[] { "Alkaline-Metal", "Lithium (from Greek: λίθος, romanized: lithos, lit. 'stone') is a chemical element with the symbol Li and atomic number 3. It is a soft, silvery-white alkali metal. Under standard conditions, it is the lightest metal and the lightest solid element. Like all alkali metals, lithium is highly reactive and flammable, and must be stored in mineral oil. When cut, it exhibits a metallic luster, but moist air corrodes it quickly to a dull silvery gray, then black tarnish. It never occurs freely in nature, but only in (usually ionic) compounds, such as pegmatitic minerals, which were once the main source of lithium. Due to its solubility as an ion, it is present in ocean water and is commonly obtained from brines. Lithium metal is isolated electrolytically from a mixture of lithium chloride and potassium chloride. -Wikipedia", "https://images.hgmsites.net/hug/fisker-flexible-solid-state-battery-material_100638837_h.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Butyllithium-hexamer-from-xtal-3D-balls-A.png/330px-Butyllithium-hexamer-from-xtal-3D-balls-A.png", "solid" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 1,
                column: "Image",
                value: "https://metaphysicalexperience.files.wordpress.com/2010/06/physical-universe.jpg");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 19,
                columns: new[] { "Class", "Description", "Image", "Image2", "Phase" },
                values: new object[] { "AM", "", "", null, null });
        }
    }
}
