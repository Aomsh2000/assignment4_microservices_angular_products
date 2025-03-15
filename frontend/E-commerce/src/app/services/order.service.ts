import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OrderItem {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  orderId: number;
}

export interface Order {
  id: number;
  customerName: string;
  orderDate: string; // In ISO 8601 format (e.g., "2025-03-12T00:00:00Z")
  totalAmount: number;
  orderItems: OrderItem[]; // Array of order items
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = `http://localhost:5227/api/orders`;

  constructor(private http: HttpClient) { }

  // Load all orders
  loadOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  // Load a single order by ID
  loadOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  // Create a new order
  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

  // Update an existing order
  updateOrder(id: number, order: Order): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, order);
  }

  // Delete an order
  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}