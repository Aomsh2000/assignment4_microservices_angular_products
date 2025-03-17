
# Full-Stack Application: E-Commerce with Angular and .NET Microservices
This is a full-stack application for an e-commerce platform. The project is built using Angular for the frontend and .NET Core for the backend. The application is integrated with NgRx for state management and follows a microservices architecture where two services (Product and Order) interact via REST APIs.

# Project Overview
Frontend (Angular)
NgRx state management for handling products and orders.
The UI displays products, allows the addition and removal of products, and manages the order placement process.
NgRx Effects handle API calls and manage loading and error states.
Backend (.NET Core Microservices)
Two separate services: ProductService and OrderService.
ProductService: Handles product-related CRUD operations.
OrderService: Manages customer orders, including creating and managing orders.
Both services communicate via REST APIs.
Cloud Deployment (Bonus - A+)
Optional: Deploy the services on cloud platforms like Azure, AWS, or Firebase for production use.

# Tech Stack
Frontend: Angular, NgRx
Backend: .NET Core (ProductService, OrderService)
State Management: NgRx (Store, Actions, Reducers, Effects, Selectors)
Database: SQL (via Entity Framework Core)
APIs: REST APIs for communication between frontend and backend
Deployment: Optional (Azure, AWS, Firebase)
Task Breakdown
Task 1: Setting Up Angular with NgRx (20 Marks)
Initialize Angular Project: Set up an Angular project with necessary dependencies.
Install NgRx: Install and configure NgRx Store, Actions, Reducers, and Selectors.
Product Store: Implement actions for fetching, adding, and deleting products.
UI Integration: Display the product list using NgRx selectors and manage state efficiently.
Deliverables: A working Angular project with NgRx set up, including the Product Store implementation.

Task 2: Implementing Product Microservice in .NET Core (20 Marks)
Create Product Microservice: Implement CRUD operations for products (Create, Read, Update, Delete).
Use EF Core: Connect to a database (SQL Server or in-memory) for product data storage.
Expose APIs: Create RESTful API endpoints for managing products.
Deliverables: A functional Product Microservice with API endpoints.

Task 3: Connecting Angular with Product Microservice using NgRx Effects (20 Marks)
NgRx Effects: Set up NgRx Effects to interact with the backend for fetching product data.
HTTP Service: Create a service that communicates with the Product Microservice.
Loading & Error Handling: Implement loading indicators and error states while fetching data.
Deliverables: The Angular frontend should integrate with the Product Microservice via NgRx Effects and handle product state correctly.

Task 4: Implementing Order Microservice and Handling State in NgRx (20 Marks)
Order Microservice: Implement CRUD operations for handling customer orders.
NgRx Store for Orders: Use NgRx to manage the state of orders in the frontend.
NgRx Effects: Handle placing an order by calling the Order Microservice through NgRx Effects.
Deliverables: A functional Order Microservice integrated with the frontend, using NgRx to manage order state.

# API Endpoints
Product Service API
GET /api/products: Retrieve all products.
POST /api/products: Create a new product.
PUT /api/products/{id}: Update an existing product.
DELETE /api/products/{id}: Delete a product.
Order Service API
GET /api/orders: Retrieve all orders.
POST /api/orders: Create a new order.
PUT /api/orders/{id}: Update an order.
DELETE /api/orders/{id}: Delete an order.
Setup Instructions
Frontend Setup (Angular)
Clone the repository:

```bash

git clone https://github.com/Aomsh2000/assignment4_microservices_angular_products.git
cd frontend
```
Install dependencies:

```bash


npm install
Run the Angular application:
```
```bash
ng serve
```
Navigate to http://localhost:4200 in your browser to see the application running.

Backend Setup (.NET Core Microservices)
Clone the repository:

```bash

git clone https://github.com/Aomsh2000/assignment4_microservices_angular_products.git
cd backend/ProductService
```
Run the Product Microservice:

```bash

dotnet run
Run the Order Microservice:
```
```bash

cd ../OrderService
dotnet run
```
Ensure both microservices are running on their respective ports (e.g., http://localhost:5000 for ProductService).

# Testing the APIs
You can test the Product and Order APIs using Postman or Swagger UI.

# Product API:

GET /api/products
POST /api/products
PUT /api/products/{id}
DELETE /api/products/{id}
Order API:

GET /api/orders
POST /api/orders
PUT /api/orders/{id}
DELETE /api/orders/{id}
Error Handling & Loading Indicators
Loading States: During data fetch operations (e.g., loading products or orders), a loading indicator will be displayed.
Error States: If an API call fails, an error message will be shown to the user.
Deployment Instructions (Optional - Bonus)
Deploy Product and Order Microservices on cloud platforms like Azure, AWS, or Firebase.
Update API endpoints in the Angular app to point to the deployed services.
Conclusion
This full-stack application demonstrates the integration of NgRx for state management in Angular and the microservices architecture with .NET Core. The project showcases practical skills in building scalable, state-managed applications, integrating backend services, and managing products and orders efficiently.

For further details, please refer to the individual microservices and Angular app for the implementation.

# Best Practices
Modularize Angular Code: Separate feature modules for products and orders.
Handle Errors Gracefully: Always handle API errors and show user-friendly error messages.
Use Dependency Injection: Both in Angular and .NET Core for scalability.
Write Tests: Use Postman/Swagger for API testing and ensure your application works correctly.
Document Your Work: Keep your documentation clear and structured, as shown here.
# GitHub Repository
You can find the full code for this project on GitHub:
Assignment 4: Microservices with Angular and .NET Core