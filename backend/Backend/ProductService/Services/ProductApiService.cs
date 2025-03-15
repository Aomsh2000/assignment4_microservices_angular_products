using System.Net.Http.Json;
using ProductService.Models;

namespace ProductService.Services
{
    public class ProductApiService
    {
        private readonly HttpClient _httpClient;

        public ProductApiService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<Product>> GetProductsAsync()
        {
            try
            {
                // Fetch data from the Fake Store API
                var url = "https://fakestoreapi.com/products";
                var products = await _httpClient.GetFromJsonAsync<List<Product>>(url);

                // Return the list of products
                return products;
            }
            catch (Exception ex)
            {
                // Log or handle the error
                Console.WriteLine($"Error fetching products: {ex.Message}");
                return new List<Product>(); // Return an empty list in case of error
            }
        }
    }
}