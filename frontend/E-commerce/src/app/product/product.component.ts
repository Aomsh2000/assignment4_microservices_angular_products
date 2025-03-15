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
    this.store.dispatch(ProductActions.loadProducts());
    this.products$ = this.store.select(selectAllProducts);
    this.error = this.store.select(selectProductError);
  }

  ngOnInit(): void {
    // Initialize FormGroup in ngOnInit
/*     this.productForm = this.fb.group({
      title: new FormControl('', [Validators.minLength(2), Validators.required]),
      price: new FormControl('', [Validators.required]),
      description:new FormControl('', [Validators.required]),
      category:new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      rating: { count: new FormControl('', [Validators.required]), rate: new FormControl('', [Validators.required]),}

      
    }); */

/*     this.editForm = this.fb.group({
      title: new FormControl('', [Validators.minLength(2), Validators.required]),
      price: new FormControl('', [Validators.required]),
      description:new FormControl('', [Validators.required]),
      category:new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      rating: { count: new FormControl('', [Validators.required]), rate: new FormControl('', [Validators.required]),}
    }); */
  }

/*   // Create a product
  createProduct() {
    if (this.productForm.valid) {
      const newProduct: Product = {
        id: this.generateId(),
        title: this.productForm.value.title,
        price: this.productForm.value.price,
        description:this.productForm.value.description,
        category:this.productForm.value.category,
        image: this.productForm.value.image,
        rating: { count: this.productForm.value.count, rate: this.productForm.value.rate }
      
      };

      // Dispatch the action to create the product
      this.store.dispatch(ProductActions.createProduct({ product: newProduct }));
    } else {
      // Handle invalid form
      console.log('Form is not valid');
    }
  } */

  // Update a product
 /*  updateProduct(id: number) {
    if (this.editForm.valid) {
      const updatedProduct: Product = {
        id: id, // Use the passed id to update the correct product
        title: this.editForm.value.title,
        price: this.editForm.value.price,
        description:this.editForm.value.description,
        category:this.editForm.value.category,
        image: this.editForm.value.image,
        rating: { count: this.editForm.value.count, rate: this.editForm.value.rate }
      };

      // Dispatch the action to update the product
      this.store.dispatch(ProductActions.updateProduct({ id, product: updatedProduct }));
    } else {
      // Handle invalid form
      console.log('Form is not valid');
    }
  }  */
    editProduct(id: number) {
      this.store.dispatch(ProductActions.loadProducts());
      this.router.navigate([`/app-product-edit/${id}`]); 
    }

  // Delete a product
  deleteProduct(id: number) {
    
    this.store.dispatch(ProductActions.deleteProduct({ id }));
  }

//refresh products
  loadProducts() {
    this.store.dispatch(ProductActions.loadProducts());
  }

/*   generateId(): number {
    return Math.floor(Math.random() * (9999 - 101 + 1)) + 101;
  } */
}



  
