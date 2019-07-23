using Microsoft.EntityFrameworkCore.Migrations;

namespace PeriodicTable.Migrations
{
    public partial class testm21 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Elements",
                columns: new[] { "ElementId", "AtomicNumber", "AtomicWeight", "Class", "Description", "GroupId", "Image", "Name", "PeriodId", "Symbol" },
                values: new object[,]
                {
                    { 109, 87, 223.02, "AM", "", 1, "", "Francium", 7, "Fr" },
                    { 124, 116, 298.0, "UP", "", 16, "", "Livermorium", 7, "Lv" },
                    { 123, 115, 0.0, "UP", "", 15, "", "Ununpentium", 7, "Uup" },
                    { 122, 114, 289.0, "PTM", "", 14, "", "Flernovium", 7, "Fl" },
                    { 121, 113, 0.0, "UP", "", 13, "", "Ununtrium", 7, "Uut" },
                    { 120, 112, 277.0, "TM", "", 12, "", "Coperniclum", 7, "Cn" },
                    { 119, 111, 272.0, "UP", "", 11, "", "Roentgenium", 7, "Rg" },
                    { 118, 110, 269.0, "UP", "", 10, "", "Darmstadtium", 7, "Ds" },
                    { 117, 109, 268.0, "UP", "", 9, "", "Meltnerium", 7, "Mt" },
                    { 116, 108, 269.0, "TM", "", 8, "", "Hasslum", 7, "Hs" },
                    { 115, 107, 264.0, "TM", "", 7, "", "Bohrlum", 7, "Bh" },
                    { 114, 106, 266.0, "TM", "", 6, "", "Seaborgium", 7, "Sg" },
                    { 113, 105, 262.0, "TM", "", 5, "", "Dubnium", 7, "Db" },
                    { 112, 104, 261.0, "TM", "", 4, "", "Rutherfordium", 7, "Rf" },
                    { 111, 0, 0.0, "A", "", 3, "", "Actinides", 7, "89-103" },
                    { 110, 88, 226.025, "AEM", "", 2, "", "Radium", 7, "Ra" },
                    { 125, 117, 0.0, "UP", "", 17, "", "Ununseptium", 7, "Uus" },
                    { 126, 118, 0.0, "UP", "", 18, "", "Ununoctium", 7, "Uuo" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 109);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 110);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 111);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 112);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 113);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 114);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 115);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 116);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 117);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 118);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 119);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 120);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 121);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 122);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 123);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 124);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 125);

            migrationBuilder.DeleteData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 126);
        }
    }
}
