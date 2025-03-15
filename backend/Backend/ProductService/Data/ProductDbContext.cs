using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using ProductService.Models;

namespace ProductService.Data
{
    public class ProductDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public ProductDbContext(DbContextOptions<ProductDbContext> options) : base(options) {

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
            // Configure the primary key for the Product entity
            modelBuilder.Entity<Product>().HasKey(t => t.Id);

            // Configure the Rating object as an owned entity
            modelBuilder.Entity<Product>(entity =>
            {
                // Map the Product entity to the 'product' table
                entity.ToTable("product");

                // Configure the Rating object as an owned entity
                entity.OwnsOne(p => p.Rating, r =>
                {
                    // Map the Rate property to the 'product_rating_rate' column
                    r.Property(r => r.Rate).HasColumnName("product_rating_rate");

                    // Map the Count property to the 'product_rating_count' column
                    r.Property(r => r.Count).HasColumnName("product_rating_count");
                });
            });

            base.OnModelCreating(modelBuilder);
        }


    }
}