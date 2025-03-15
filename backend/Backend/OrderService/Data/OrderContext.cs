using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using OrderService.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrderService.Data
{
    
    public class OrderContext : DbContext
    {

        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public OrderContext(DbContextOptions<OrderContext> options) : base(options) {
            try
            {
                var databaseCreator = Database.GetService<IDatabaseCreator>() as RelationalDatabaseCreator;
                if (databaseCreator != null)
                {
                    if (!databaseCreator.CanConnect())
                    {
                        databaseCreator.Create();
                    }
                    if (!databaseCreator.HasTables())
                    {
                        databaseCreator.CreateTables();
                    }
                }

            }

            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure the one-to-many relationship between Order and OrderItem
            modelBuilder.Entity<Order>()
                .HasMany(o => o.OrderItems)
                .WithOne(oi => oi.Order)
                .HasForeignKey(oi => oi.OrderId);

            // Seed data for Orders and OrderItems
            modelBuilder.Entity<Order>().HasData(
                new Order
                {
                    Id = 1,
                    CustomerName = "John Doe",
                    OrderDate = new DateTime(2025, 3, 12),
                    TotalAmount = 150.00m
                },
                new Order
                {
                    Id = 2,
                    CustomerName = "Jane Smith",
                    OrderDate = new DateTime(2025, 3, 13),
                    TotalAmount = 200.00m
                }
            );

            modelBuilder.Entity<OrderItem>().HasData(
                new OrderItem
                {
                    Id = 1,
                    ProductId = 101,
                    ProductName = "Product A",
                    Quantity = 2,
                    Price = 50.00m,
                    OrderId = 1
                },
                new OrderItem
                {
                    Id = 2,
                    ProductId = 102,
                    ProductName = "Product B",
                    Quantity = 1,
                    Price = 50.00m,
                    OrderId = 1
                },
                new OrderItem
                {
                    Id = 3,
                    ProductId = 103,
                    ProductName = "Product C",
                    Quantity = 3,
                    Price = 66.67m,
                    OrderId = 2
                }
            );
        }
    }
}