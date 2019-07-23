using Microsoft.EntityFrameworkCore.Migrations;

namespace PeriodicTable.Migrations
{
    public partial class testm8 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Elements",
                columns: new[] { "ElementId", "AtomicNumber", "AtomicWeight", "Class", "Description", "GroupId", "Image", "Name", "PeriodId", "Symbol" },
                values: new object[,]
                {
                    { 55, 19, 39.098, "AM", "", 1, "", "Potassium", 4, "K" },
                    { 70, 34, 78.971, "PN", "", 16, "", "Selenium", 4, "Se" },
                    { 69, 33, 74.922, "M", "", 15, "", "Arsenic", 4, "As" },
                    { 68, 32, 72.631, "M", "", 14, "", "Germanium", 4, "Ge" },
                    { 67, 31, 69.723, "PTM", "", 13, "", "Gallium", 4, "Ga" },
                    { 66, 30, 65.38, "TM", "", 12, "", "Zinc", 4, "Zn" },
                    { 65, 29, 63.546, "TM", "", 11, "", "Copper", 4, "Cu" },
                    { 64, 28, 58.693, "TM", "", 10, "", "Nickel", 4, "Ni" },
                    { 63, 27, 58.933, "TM", "", 9, "", "Cobalt", 4, "Co" },
                    { 62, 26, 55.845, "TM", "", 8, "", "Iron", 4, "Fe" },
                    { 61, 25, 54.938, "TM", "", 7, "", "Manganese", 4, "Mn" },
                    { 60, 24, 51.996, "TM", "", 6, "", "Chromium", 4, "Cr" },
                    { 59, 23, 50.942, "TM", "", 5, "", "Vanadium", 4, "V" },
                    { 58, 22, 47.867, "TM", "", 4, "", "Titanium", 4, "Ti" },
                    { 57, 21, 44.956, "TM", "", 3, "", "Scandium", 4, "Sc" },
                    { 56, 20, 40.078, "AEM", "", 2, "", "Calcium", 4, "Ca" },
                    { 71, 35, 79.904, "DN", "", 17, "", "Bromine", 4, "Br" },
                    { 72, 36, 83.798, "NG", "", 18, "", "Krypton", 4, "Kr" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 55);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 56);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 57);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 58);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 59);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 60);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 61);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 62);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 63);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 64);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 65);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 66);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 67);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 68);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 69);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 70);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 71);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 72);
        }
    }
}
