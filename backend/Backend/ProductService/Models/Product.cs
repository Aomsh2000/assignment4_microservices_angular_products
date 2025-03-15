using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProductService.Models
{
    [Table("product")]
    public class Product
    {
        [Key]  // Marks 'id' as the primary key
        [Column("product_id")]
        public int Id { get; set; }
        [Column("product_title")]
        public string Title { get; set; }
        [Column("product_price")]
        public decimal Price { get; set; }
        [Column("product_description")]
        public string Description { get; set; }
        [Column("product_category")]
        public string Category { get; set; }
        [Column("product_image")]
        public string Image { get; set; }
       
        public Rating Rating { get; set; }
    }
    public class Rating
    {
       
        public decimal Rate { get; set; }
      
        public int Count { get; set; }
    }


}
