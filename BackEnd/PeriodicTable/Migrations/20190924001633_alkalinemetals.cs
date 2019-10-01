using Microsoft.EntityFrameworkCore.Migrations;

namespace PeriodicTable.Migrations
{
    public partial class alkalinemetals : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 37,
                column: "Class",
                value: "Alkaline-Metal");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 55,
                column: "Class",
                value: "Alkaline-Metal");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 73,
                column: "Class",
                value: "Alkaline-Metal");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 91,
                column: "Class",
                value: "Alkaline-Metal");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 109,
                column: "Class",
                value: "Alkaline-Metal");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 37,
                column: "Class",
                value: "AM");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 55,
                column: "Class",
                value: "AM");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 73,
                column: "Class",
                value: "AM");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 91,
                column: "Class",
                value: "AM");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 109,
                column: "Class",
                value: "AM");
        }
    }
}
