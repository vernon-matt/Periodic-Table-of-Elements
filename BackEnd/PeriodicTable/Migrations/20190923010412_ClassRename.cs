using Microsoft.EntityFrameworkCore.Migrations;

namespace PeriodicTable.Migrations
{
    public partial class ClassRename : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 1,
                column: "Class",
                value: "Polyatomic-Nonmetal");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 32,
                column: "Class",
                value: "Polyatomic-Nonmetal");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 33,
                column: "Class",
                value: "Polyatomic-Nonmetal");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 34,
                column: "Class",
                value: "Polyatomic-Nonmetal");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 51,
                column: "Class",
                value: "Polyatomic-Nonmetal");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 52,
                column: "Class",
                value: "Polyatomic-Nonmetal");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 70,
                column: "Class",
                value: "Polyatomic-Nonmetal");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 1,
                column: "Class",
                value: "PN");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 32,
                column: "Class",
                value: "PN");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 33,
                column: "Class",
                value: "PN");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 34,
                column: "Class",
                value: "PN");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 51,
                column: "Class",
                value: "PN");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 52,
                column: "Class",
                value: "PN");

            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 70,
                column: "Class",
                value: "PN");
        }
    }
}
