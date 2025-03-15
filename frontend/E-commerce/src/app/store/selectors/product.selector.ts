import { createFeatureSelector, createSelector } from '@ngrx/store'
import { Product } from '../../services/product.service';
import { ProductState } from '../reducers/product.reducer';

export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
    selectProductState,
  (state: ProductState) => state.products,
)


export const selectProductError = createSelector(
    selectProductState,
  (state: ProductState) => state.error
);

export const selectProductById = (id: number) => createSelector(
    selectProductState,
    (state: ProductState) => state.products.find(product => product.id === id) || null
  );
