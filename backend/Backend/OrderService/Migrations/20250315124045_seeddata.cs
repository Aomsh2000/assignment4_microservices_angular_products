using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace OrderService.Migrations
{
    /// <inheritdoc />
    public partial class seeddata : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "order",
                columns: new[] { "Id", "CustomerName", "OrderDate", "TotalAmount" },
                values: new object[,]
                {
                    { 1, "John Doe", new DateTime(2025, 3, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), 150.00m },
                    { 2, "Jane Smith", new DateTime(2025, 3, 13, 0, 0, 0, 0, DateTimeKind.Unspecified), 200.00m }
                });

            migrationBuilder.InsertData(
                table: "OrderItems",
                columns: new[] { "Id", "OrderId", "Price", "ProductId", "ProductName", "Quantity" },
                values: new object[,]
                {
                    { 1, 1, 50.00m, 101, "Product A", 2 },
                    { 2, 1, 50.00m, 102, "Product B", 1 },
                    { 3, 2, 66.67m, 103, "Product C", 3 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "OrderItems",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "OrderItems",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "OrderItems",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "order",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "order",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
