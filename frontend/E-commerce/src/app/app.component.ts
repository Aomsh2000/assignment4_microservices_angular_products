import { Component, OnInit } from '@angular/core';
import { ProductLoaderService } from './services/product-loader.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-commerce';

  constructor(private productLoaderService: ProductLoaderService) {}

  ngOnInit(): void {
    this.productLoaderService.loadProducts(); // Load products when the app starts
  }
}