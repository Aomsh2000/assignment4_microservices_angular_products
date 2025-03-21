﻿using Microsoft.AspNetCore.Mvc;
using ProductService.Data;
using ProductService.Models;
using ProductService.Services;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace ProductService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ProductDbContext _context;
        private readonly ProductApiService _productService;

        public ProductsController(ProductDbContext context, ProductApiService productService)
        {
            _context = context;
            _productService = productService;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            try
            {
                // Fetch products from the Fake Store API
                var products = await _productService.GetProductsAsync();

                // Check for existing products in the database
                var existingProductIds = await _context.Products.Select(p => p.Id).ToListAsync();

                // Filter out products that already exist in the database
                var newProducts = products.Where(p => !existingProductIds.Contains(p.Id)).ToList();

                // Save only new products to the database
                if (newProducts.Any())
                {
                    await _context.Products.AddRangeAsync(newProducts);
                    await _context.SaveChangesAsync();
                }

                // Return the list of products
                return Ok(products);
            }
            catch (Exception ex)
            {
                // Handle other errors
                return StatusCode(500, "An error occurred while processing your request.");
            }
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        // POST: api/Products
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }

        // PUT: api/Products/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}