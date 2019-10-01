using Microsoft.EntityFrameworkCore.Migrations;

namespace PeriodicTable.Migrations
{
    public partial class helium : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 18,
                columns: new[] { "Class", "Description", "Image" },
                values: new object[] { "Noble-Gas", "Helium (from Greek: ἥλιος, romanized: Helios, lit. 'Sun') is a chemical element with the symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas group in the periodic table. Its boiling point is the lowest among all the elements. Helium is the second lightest and second most abundant element in the observable universe (hydrogen is the lightest and most abundant). It is present at about 24% of the total elemental mass, which is more than 12 times the mass of all the heavier elements combined. Its abundance is similar to this in both the Sun and in Jupiter. This is due to the very high nuclear binding energy (per nucleon) of helium-4, with respect to the next three elements after helium. -Wikipedia", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Helium_discharge_tube.jpg/1280px-Helium_discharge_tube.jpg" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Elements",
                keyColumn: "ElementId",
                keyValue: 18,
                columns: new[] { "Class", "Description", "Image" },
                values: new object[] { "NG", "", "" });
        }
    }
}
