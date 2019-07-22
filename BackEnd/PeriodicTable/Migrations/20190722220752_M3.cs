using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PeriodicTable.Migrations
{
    public partial class M3 : Migration
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
                value: 1);

            migrationBuilder.InsertData(
                table: "Periods",
                column: "PeriodId",
                value: 1);

            migrationBuilder.InsertData(
                table: "Elements",
                columns: new[] { "ElementId", "AtomicNumber", "AtomicWeight", "Class", "Description", "GroupId", "Image", "Name", "PeriodId", "Symbol" },
                values: new object[] { 1, 1, 1.07794, "NonMetal", "HydrogenHydrogen", 1, "https://metaphysicalexperience.files.wordpress.com/2010/06/physical-universe.jpg", "Hydrogen", 1, "H" });

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
