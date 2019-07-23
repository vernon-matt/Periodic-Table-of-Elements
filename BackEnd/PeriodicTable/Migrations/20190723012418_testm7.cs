using Microsoft.EntityFrameworkCore.Migrations;

namespace PeriodicTable.Migrations
{
    public partial class testm7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Elements",
                columns: new[] { "ElementId", "AtomicNumber", "AtomicWeight", "Class", "Description", "GroupId", "Image", "Name", "PeriodId", "Symbol" },
                values: new object[,]
                {
                    { 37, 11, 22.99, "AM", "", 1, "", "Sodium", 3, "Na" },
                    { 52, 16, 32.066, "PN", "", 16, "", "Sulfur", 3, "S" },
                    { 51, 15, 30.974, "PN", "", 15, "", "Phosphorus", 3, "P" },
                    { 50, 14, 28.066, "M", "", 14, "", "Silicon", 3, "Si" },
                    { 49, 13, 26.982, "PTM", "", 13, "", "Aluminum", 3, "Al" },
                    { 48, 1, 0.0, "NON", "", 12, "", "ADD NEW", 3, "+" },
                    { 47, 1, 0.0, "NON", "", 11, "", "ADD NEW", 3, "+" },
                    { 46, 1, 0.0, "NON", "", 10, "", "ADD NEW", 3, "+" },
                    { 45, 1, 0.0, "NON", "", 9, "", "ADD NEW", 3, "+" },
                    { 44, 1, 0.0, "NON", "", 8, "", "ADD NEW", 3, "+" },
                    { 43, 1, 0.0, "NON", "", 7, "", "ADD NEW", 3, "+" },
                    { 42, 1, 0.0, "NON", "", 6, "", "ADD NEW", 3, "+" },
                    { 41, 1, 0.0, "NON", "", 5, "", "ADD NEW", 3, "+" },
                    { 40, 1, 0.0, "NON", "", 4, "", "ADD NEW", 3, "+" },
                    { 39, 1, 0.0, "NON", "", 3, "", "ADD NEW", 3, "+" },
                    { 38, 12, 24.305, "TM", "", 2, "", "Magnesium", 3, "Mg" },
                    { 53, 17, 35.453, "DN", "", 17, "", "Chlorine", 3, "Al" },
                    { 54, 18, 39.948, "NG", "", 18, "", "Argon", 3, "Ar" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 37);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 38);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 39);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 40);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 41);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 42);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 43);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 44);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 45);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 46);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 47);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 48);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 49);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 50);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 51);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 52);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 53);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 54);
        }
    }
}
