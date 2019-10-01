using Microsoft.EntityFrameworkCore.Migrations;

namespace PeriodicTable.Migrations
{
    public partial class helium2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 18,
                columns: new[] { "Image2", "Phase" },
                values: new object[] { "https://chem.libretexts.org/@api/deki/files/124528/Figure_1.png?revision=1&size=bestfit&width=420&height=208", "gas" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 18,
                columns: new[] { "Image2", "Phase" },
                values: new object[] { null, null });
        }
    }
}
