import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
//import { ProductService } from '../../services/product.service';
import { Store } from '@ngrx/store';
import { Product } from '../../services/product.service';
import * as ProductActions from '../../store/actions/product.actions';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-form',
  imports:[CommonModule,ReactiveFormsModule,FormsModule ],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  createProductForm!: FormGroup;
  router!:Router;
  constructor(private fb: FormBuilder, private store: Store ) {}

  ngOnInit(): void {
    this.createProductForm = this.fb.group({
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
  }

 createProduct() {
   
      const newProduct: Product = {
        id: this.generateId(),
        title: this.createProductForm.value.title,
        price: this.createProductForm.value.price,
        description: this.createProductForm.value.description,
        category: this.createProductForm.value.category,
        image: this.createProductForm.value.image,
        rating: {
          count: this.createProductForm.value.rating.count,
          rate: this.createProductForm.value.rating.rate
        }
      };

      this.store.dispatch(ProductActions.createProduct({ product: newProduct }));
    
  } 


    onSubmit() {
      if (this.createProductForm.valid) {
        
        this.createProduct()
       
      } else {
        console.log('Form is invalid');
      }
    }
  
    generateId(): number {
      return Math.floor(Math.random() * (9999 - 101 + 1)) + 101;
    }
}
