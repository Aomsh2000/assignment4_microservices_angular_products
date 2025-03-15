import { createAction, props } from '@ngrx/store'
import { Product } from '../../services/product.service'


// Load task action
export const loadProducts = createAction('[Product Component] loadProducts');

// Load task success action
export const loadProductsSuccess = createAction(
  '[Product Component] loadProductsSuccess',
  props<{ products: Product[] }>() 
);

// Load task failure action
export const loadProductsFailure = createAction(
  '[Product Component] loadProductsFailure',
  props<{ errorMessage: string }>() )
// Create Product Actions

export const createProduct = createAction(
    '[Product] Create Product',
    props<{ product: Product }>()
  );
  
  export const createProductSuccess = createAction(
    '[Product] Create Product Success',
    props<{ product: Product }>()
  );
  
  export const createProductFailure = createAction(
    '[Product] Create Product Failure',
    props<{ error: any }>()
  );
  
  // Update Product Actions
  export const updateProduct = createAction(
    '[Product] Update Product',
    props<{ id: number, product: Product }>()
  );
  
  export const updateProductSuccess = createAction(
    '[Product] Update Product Success',
    props<{ id: number }>()  // Accepting only the product id
  );
  
  export const updateProductFailure = createAction(
    '[Product] Update Product Failure',
    props<{ error: any }>()
  );
  
  // Delete Product Actions
  export const deleteProduct = createAction(
    '[Product] Delete Product',
    props<{ id: number }>()
  );
  
  export const deleteProductSuccess = createAction(
    '[Product] Delete Product Success',
    props<{ id: number }>()
  );
  
  export const deleteProductFailure = createAction(
    '[Product] Delete Product Failure',
    props<{ error: any }>()
  );