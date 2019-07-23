using Microsoft.EntityFrameworkCore.Migrations;

namespace PeriodicTable.Migrations
{
    public partial class testm20 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Elements",
                columns: new[] { "ElementId", "AtomicNumber", "AtomicWeight", "Class", "Description", "GroupId", "Image", "Name", "PeriodId", "Symbol" },
                values: new object[,]
                {
                    { 91, 55, 132.905, "AM", "", 1, "", "Cesium", 6, "Cs" },
                    { 106, 84, 208.982, "PTM", "", 16, "", "Polonium", 6, "Po" },
                    { 105, 83, 208.98, "PTM", "", 15, "", "Bismuth", 6, "BI" },
                    { 104, 82, 207.2, "PTM", "", 14, "", "Lead", 6, "Pb" },
                    { 103, 81, 204.383, "PTM", "", 13, "", "Thallium", 6, "Ti" },
                    { 102, 80, 200.592, "TM", "", 12, "", "Mercury", 6, "Hg" },
                    { 101, 79, 196.967, "TM", "", 11, "", "Gold", 6, "Au" },
                    { 100, 78, 195.085, "TM", "", 10, "", "Platinum", 6, "Pt" },
                    { 99, 77, 192.217, "TM", "", 9, "", "Iridium", 6, "Ir" },
                    { 98, 76, 190.23, "TM", "", 8, "", "Osminium", 6, "Os" },
                    { 97, 75, 186.207, "TM", "", 7, "", "Rhenium", 6, "Re" },
                    { 96, 74, 183.948, "TM", "", 6, "", "Tungsten", 6, "W" },
                    { 95, 73, 180.948, "TM", "", 5, "", "Tantalum", 6, "Ta" },
                    { 94, 72, 178.49, "TM", "", 4, "", "Hafnium", 6, "Hf" },
                    { 93, 0, 0.0, "L", "", 3, "", "Lanthanides", 6, "57-71" },
                    { 92, 56, 137.328, "AEM", "", 2, "", "Barium", 6, "Ba" },
                    { 107, 85, 208.982, "M", "", 17, "", "Astatine", 6, "At" },
                    { 108, 86, 208.982, "NG", "", 18, "", "Radon", 6, "Rn" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 91);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 92);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 93);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 94);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 95);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 96);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 97);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 98);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 99);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 100);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 101);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 102);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 103);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 104);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 105);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 106);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 107);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 108);
        }
    }
}
