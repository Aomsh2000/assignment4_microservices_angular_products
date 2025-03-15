import { createReducer, on } from '@ngrx/store';
import { Order } from '../../services/order.service';
import * as OrderActions from '../actions/order.actions';

export interface OrderState {
  orders: Order[];
  error: string | null;
}

export const initialState: OrderState = {
  orders: [],
  error: null,
};

export const orderReducer = createReducer(
  initialState,
  on(OrderActions.loadOrdersSuccess, (state, { orders }) => ({
    ...state,
    orders,
    error: null
  })),
  on(OrderActions.loadOrdersFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(OrderActions.createOrderSuccess, (state, { order }) => ({
    ...state,
    orders: [...state.orders, order],
    error: null
  })),
  on(OrderActions.createOrderFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(OrderActions.updateOrderSuccess, (state, { order }) => ({
    ...state,
    orders: state.orders.map(o => (o.id === order.id ? order : o)),
    error: null
  })),
  on(OrderActions.updateOrderFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(OrderActions.deleteOrderSuccess, (state, { id }) => ({
    ...state,
    orders: state.orders.filter(o => o.id !== id),
    error: null
  })),
  on(OrderActions.deleteOrderFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
