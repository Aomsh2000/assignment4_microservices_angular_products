import { Injectable } from '@angular/core';
import { Actions, ofType,createEffect } from '@ngrx/effects';
import { OrderService } from '../../services/order.service';
import * as OrderActions from '../actions/order.actions'
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class OrderEffects {

  constructor(
    private actions$: Actions,
    private orderService: OrderService
  ) {}

  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.loadOrders),
      mergeMap(() =>
        this.orderService.loadOrders().pipe(
          map(orders => OrderActions.loadOrdersSuccess({ orders })),
          catchError(error => of(OrderActions.loadOrdersFailure({ error: error.message })))
        )
      )
    )
  );

  createOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.createOrder),
      mergeMap(action =>
        this.orderService.createOrder(action.order).pipe(
          map(order => OrderActions.createOrderSuccess({ order })),
          catchError(error => of(OrderActions.createOrderFailure({ error: error.message })))
        )
      )
    )
  );

  updateOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.updateOrder),
      mergeMap(action =>
        this.orderService.updateOrder(action.order.id, action.order).pipe(
          map(() => OrderActions.updateOrderSuccess({ order: action.order })),
          catchError(error => of(OrderActions.updateOrderFailure({ error: error.message })))
        )
      )
    )
  );
  

  deleteOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.deleteOrder),
      mergeMap(action =>
        this.orderService.deleteOrder(action.id).pipe(
          map(() => OrderActions.deleteOrderSuccess({ id: action.id })),
          catchError(error => of(OrderActions.deleteOrderFailure({ error: error.message })))
        )
      )
    )
  );
}
