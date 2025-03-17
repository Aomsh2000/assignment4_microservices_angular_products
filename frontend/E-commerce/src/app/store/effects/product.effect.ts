import { Injectable, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from '../actions/product.actions';
import { catchError, map, of, switchMap } from 'rxjs';
@Injectable()
export class ProductEffect {
  private api = inject(ProductService);
  action$ = inject(Actions);

  loadProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() =>
        this.api.GetProducts().pipe(
          map((res) => ProductActions.loadProductsSuccess({ products: res })),
          catchError((error: { message: string }) =>
            of(
                ProductActions.loadProductsFailure({
                errorMessage: 'Fail to load products',
              })
            )
          )
        )
      )
    )
  );

  // Create Product Effect
  createProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductActions.createProduct),
      switchMap(action =>
        this.api.CreateProduct(action.product).pipe(
          map((product) => {
            console.log('Product created:', product); // Log the response
            return ProductActions.createProductSuccess({ product });
          }),
          catchError((error) => of(ProductActions.createProductFailure({ error })))
        )
      )
    )
  );

  // Update Product Effect
  updateProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductActions.updateProduct),
      switchMap((action) =>
        this.api.UpdateProduct(action.id, action.product).pipe(
          // No product is returned, so we only pass the id in the success action
          map(() => ProductActions.updateProductSuccess({ id: action.id })),
          catchError((error) => of(ProductActions.updateProductFailure({ error })))
        )
      )
    )
  );
  

  // Delete Product Effect
  deleteProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductActions.deleteProduct),
      switchMap(action =>
        this.api.DeleteProduct(action.id).pipe(
          map(() => ProductActions.deleteProductSuccess({ id: action.id })),
          catchError((error) => of(ProductActions.deleteProductFailure({ error })))
        )
      )
    )
  );


}