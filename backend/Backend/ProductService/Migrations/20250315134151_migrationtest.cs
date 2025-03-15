using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

#nullable disable

namespace ProductService.Migrations
{
    /// <inheritdoc />
    public partial class migrationtest : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "product",
                columns: table => new
                {
                    product_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    product_title = table.Column<string>(type: "longtext", nullable: false),
                    product_price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    product_description = table.Column<string>(type: "longtext", nullable: false),
                    product_category = table.Column<string>(type: "longtext", nullable: false),
                    product_image = table.Column<string>(type: "longtext", nullable: false),
                    product_rating_rate = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    product_rating_count = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_product", x => x.product_id);
                })
                .Annotation("MySQL:Charset", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "product");
        }
    }
}
