import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductActions from '../store/actions/product.actions';

@Injectable({
  providedIn: 'root',
})
export class ProductLoaderService {
  constructor(private store: Store) {}

  loadProducts(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }
}