import { createReducer, on } from '@ngrx/store';
import { Product } from '../../services/product.service'; // Assuming this is the correct import
import * as ProductActions from '../actions/product.actions';

export interface ProductState {
  products: Product[];  // Array to hold products
  error: string | null;  // Error message for any failures
}

// Initial state: No products, and no error
export const initialState: ProductState = {
  products: [],
  error: null,
};

export const listReducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    error: null,
  })),
  on(ProductActions.loadProductsFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage,
  })),

  // Create Product
  on(ProductActions.createProduct, (state) => ({
    ...state,
    error: null,
  })),
  on(ProductActions.createProductSuccess, (state, { product }) => ({
    ...state,
    products: [...state.products, product], // Add new product to the state
    error: null,
  })),
  on(ProductActions.createProductFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  // Update Product
  on(ProductActions.updateProduct, (state) => ({
    ...state,
    error: null,  // Reset the error when starting product update
  })),
  on(ProductActions.updateProductSuccess, (state, { id }) => ({
    ...state,
    products: state.products.map(product =>
      product.id === id ? { ...product, updated: true } : product  // You can update the product here or fetch new data if needed
    ),
    error: null,
  })),
  on(ProductActions.updateProductFailure, (state, { error }) => ({
    ...state,
    error,  // Set error if product update fails
  })),

  // Delete Product
  on(ProductActions.deleteProduct, (state) => ({
    ...state,
    error: null,
  })),
  on(ProductActions.deleteProductSuccess, (state, { id }) => ({
    ...state,
    products: state.products.filter((product) => product.id !== id), // Remove deleted product
    error: null,
  })),
  on(ProductActions.deleteProductFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  
  
)
