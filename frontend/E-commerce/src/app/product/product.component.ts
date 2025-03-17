import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router ,RouterLink} from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Product} from '../services/product.service';
import { Store } from '@ngrx/store';
import { selectAllProducts,selectProductError } from '../store/selectors/product.selector';
import * as ProductActions from '../store/actions/product.actions';
import { ProductService } from '../services/product.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
@Component({
  selector: 'app-product',
  imports: [CommonModule, ReactiveFormsModule, FormsModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]>; // Observable for all tasks
  productApi = inject(ProductService);
  error!: Observable<string | null>;
  constructor(private store: Store, private router: Router) {
    
    this.products$ = this.store.select(selectAllProducts).pipe(
      tap((products) => console.log('Products in selector:', products)) // Log the products
    );
    this.error = this.store.select(selectProductError);
  }

  ngOnInit(): void {
    
  }


    editProduct(id: number) {
      this.router.navigate([`/app-product-edit/${id}`]); 
    }

  // Delete a product
  deleteProduct(id: number) {
    
    this.store.dispatch(ProductActions.deleteProduct({ id }));
  }




}



  
