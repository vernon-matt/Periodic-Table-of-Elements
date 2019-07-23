using Microsoft.EntityFrameworkCore.Migrations;

namespace PeriodicTable.Migrations
{
    public partial class testm9 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Elements",
                columns: new[] { "ElementId", "AtomicNumber", "AtomicWeight", "Class", "Description", "GroupId", "Image", "Name", "PeriodId", "Symbol" },
                values: new object[,]
                {
                    { 73, 37, 84.468, "AM", "", 1, "", "Rubidium", 5, "Rb" },
                    { 88, 52, 127.6, "M", "", 16, "", "Tellurium", 5, "Te" },
                    { 87, 51, 121.76, "M", "", 15, "", "Antimony", 5, "Sb" },
                    { 86, 50, 118.711, "PTM", "", 14, "", "Tin", 5, "Sn" },
                    { 85, 49, 114.818, "PTM", "", 13, "", "Indium", 5, "n" },
                    { 84, 48, 112.411, "TM", "", 12, "", "Cadmium", 5, "Cd" },
                    { 83, 47, 107.868, "TM", "", 11, "", "Silver", 5, "Ag" },
                    { 82, 46, 106.42, "TM", "", 10, "", "Palladium", 5, "Pd" },
                    { 81, 45, 102.906, "TM", "", 9, "", "Rhodium", 5, "Rh" },
                    { 80, 44, 101.07, "TM", "", 8, "", "Ruthenium", 5, "Ru" },
                    { 79, 43, 98.907, "TM", "", 7, "", "Technetium", 5, "Tc" },
                    { 78, 42, 95.95, "TM", "", 6, "", "Molybdenum", 5, "Mo" },
                    { 77, 41, 92.906, "TM", "", 5, "", "Niobium", 5, "Nb" },
                    { 76, 40, 91.224, "TM", "", 4, "", "Zirconium", 5, "Zr" },
                    { 75, 39, 86.906, "TM", "", 3, "", "Yitrium", 5, "Y" },
                    { 74, 38, 87.62, "AEM", "", 2, "", "Stronium", 5, "Sr" },
                    { 89, 53, 126.904, "DN", "", 17, "", "Iodine", 5, "I" },
                    { 90, 54, 131.294, "NG", "", 18, "", "Zenon", 5, "Xe" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 73);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 74);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 75);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 76);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 77);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 78);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 79);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 80);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 81);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 82);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 83);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 84);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 85);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 86);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 87);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 88);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 89);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 90);
        }
    }
}
