import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../../services/product.service';
import * as ProductActions from '../../store/actions/product.actions';
import { CommonModule } from '@angular/common';
import { selectProductById } from '../../store/selectors/product.selector';

@Component({
  selector: 'app-product-edit',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editProductForm!: FormGroup;
  productId: number;
  product$: Observable<Product | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.productId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.product$ = this.store.select(selectProductById(this.productId));
  }

  ngOnInit(): void {
    this.editProductForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      image: ['', [Validators.required]],
      rating: this.fb.group({
        count: ['', [Validators.required]],
        rate: ['', [Validators.required]]
      })
    });
    console.log(this.editProductForm.value); // Logs only the 'rating' form group values

    // Dispatch an action to load the product details
    this.store.dispatch(ProductActions.loadProducts());
  }

  onSubmit() {
    if (this.editProductForm.valid) {
      this.updateProduct();
    } else {
      console.log('Form is invalid');
    }
  }

  updateProduct() {
    const updatedProduct: Product = {
      id: this.productId,
      title: this.editProductForm.value.title,
      price: this.editProductForm.value.price,
      description: this.editProductForm.value.description,
      category: this.editProductForm.value.category,
      image: this.editProductForm.value.image,
      rating: {
        count: this.editProductForm.value.rating.count,
        rate: this.editProductForm.value.rating.rate
      }
    };
    this.store.dispatch(ProductActions.updateProduct({ id: this.productId, product: updatedProduct }));
  }
}
