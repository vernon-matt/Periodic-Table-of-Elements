using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PeriodicTable.Migrations
{
    public partial class testm6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Groups",
                columns: table => new
                {
                    GroupId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Groups", x => x.GroupId);
                });

            migrationBuilder.CreateTable(
                name: "Periods",
                columns: table => new
                {
                    PeriodId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Periods", x => x.PeriodId);
                });

            migrationBuilder.CreateTable(
                name: "Elements",
                columns: table => new
                {
                    ElementId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AtomicNumber = table.Column<int>(nullable: false),
                    Symbol = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    AtomicWeight = table.Column<double>(nullable: false),
                    Class = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    GroupId = table.Column<int>(nullable: false),
                    PeriodId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Elements", x => x.ElementId);
                    table.ForeignKey(
                        name: "FK_Elements_Groups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "Groups",
                        principalColumn: "GroupId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Elements_Periods_PeriodId",
                        column: x => x.PeriodId,
                        principalTable: "Periods",
                        principalColumn: "PeriodId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Groups",
                column: "GroupId",
                values: new object[]
                {
                    1,
                    18,
                    17,
                    16,
                    15,
                    14,
                    12,
                    11,
                    10,
                    13,
                    8,
                    7,
                    6,
                    5,
                    4,
                    3,
                    2,
                    9
                });

            migrationBuilder.InsertData(
                table: "Periods",
                column: "PeriodId",
                values: new object[]
                {
                    6,
                    1,
                    2,
                    3,
                    4,
                    5,
                    7
                });

            migrationBuilder.InsertData(
                table: "Elements",
                columns: new[] { "ElementId", "AtomicNumber", "AtomicWeight", "Class", "Description", "GroupId", "Image", "Name", "PeriodId", "Symbol" },
                values: new object[,]
                {
                    { 1, 1, 1.07794, "PN", "HydrogenHydrogen", 1, "https://metaphysicalexperience.files.wordpress.com/2010/06/physical-universe.jpg", "Hydrogen", 1, "H" },
                    { 21, 1, 0.0, "NON", "", 3, "", "ADD NEW", 2, "+" },
                    { 22, 1, 0.0, "NON", "", 4, "", "ADD NEW", 2, "+" },
                    { 23, 1, 0.0, "NON", "", 5, "", "ADD NEW", 2, "+" },
                    { 24, 1, 0.0, "NON", "", 6, "", "ADD NEW", 2, "+" },
                    { 25, 1, 0.0, "NON", "", 7, "", "ADD NEW", 2, "+" },
                    { 26, 1, 0.0, "NON", "", 8, "", "ADD NEW", 2, "+" },
                    { 20, 4, 9.012, "AEM", "", 2, "", "Beryllium", 2, "BE" },
                    { 27, 1, 0.0, "NON", "", 9, "", "ADD NEW", 2, "+" },
                    { 29, 1, 0.0, "NON", "", 11, "", "ADD NEW", 2, "+" },
                    { 30, 1, 0.0, "NON", "", 12, "", "ADD NEW", 2, "+" },
                    { 31, 5, 10.811, "M", "", 13, "", "Boron", 2, "B" },
                    { 32, 6, 12.011, "PN", "", 14, "", "Carbon", 2, "C" },
                    { 33, 7, 14.007, "PN", "", 15, "", "Nitrogen", 2, "N" },
                    { 34, 8, 15.999, "PN", "", 16, "", "Oxygen", 2, "O" },
                    { 28, 1, 0.0, "NON", "", 10, "", "ADD NEW", 2, "+" },
                    { 19, 3, 6.941, "AM", "", 1, "", "Lithium", 2, "LI" },
                    { 18, 2, 4.003, "NG", "", 18, "", "Helium", 1, "HE" },
                    { 17, 1, 0.0, "NON", "", 17, "", "ADD NEW", 1, "+" },
                    { 2, 1, 0.0, "NON", "", 2, "", "ADD NEW", 1, "+" },
                    { 3, 1, 0.0, "NON", "", 3, "", "ADD NEW", 1, "+" },
                    { 4, 1, 0.0, "NON", "", 4, "", "ADD NEW", 1, "+" },
                    { 5, 1, 0.0, "NON", "", 5, "", "ADD NEW", 1, "+" },
                    { 6, 1, 0.0, "NON", "", 6, "", "ADD NEW", 1, "+" },
                    { 7, 1, 0.0, "NON", "", 7, "", "ADD NEW", 1, "+" },
                    { 8, 1, 0.0, "NON", "", 8, "", "ADD NEW", 1, "+" },
                    { 9, 1, 0.0, "NON", "", 9, "", "ADD NEW", 1, "+" },
                    { 10, 1, 0.0, "NON", "", 10, "", "ADD NEW", 1, "+" },
                    { 11, 1, 0.0, "NON", "", 11, "", "ADD NEW", 1, "+" },
                    { 12, 1, 0.0, "NON", "", 12, "", "ADD NEW", 1, "+" },
                    { 13, 1, 0.0, "NON", "", 13, "", "ADD NEW", 1, "+" },
                    { 14, 1, 0.0, "NON", "", 14, "", "ADD NEW", 1, "+" },
                    { 15, 1, 0.0, "NON", "", 15, "", "ADD NEW", 1, "+" },
                    { 16, 1, 0.0, "NON", "", 16, "", "ADD NEW", 1, "+" },
                    { 35, 9, 18.998, "DN", "", 17, "", "Flourine", 2, "F" },
                    { 36, 10, 20.18, "NG", "", 18, "", "Neon", 2, "Ne" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Elements_GroupId",
                table: "Elements",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_Elements_PeriodId",
                table: "Elements",
                column: "PeriodId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Elements");

            migrationBuilder.DropTable(
                name: "Groups");

            migrationBuilder.DropTable(
                name: "Periods");
        }
    }
}
