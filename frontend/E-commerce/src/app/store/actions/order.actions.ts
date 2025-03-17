import { createAction, props } from '@ngrx/store';
import { Order } from '../../services/order.service';

export const loadOrders = createAction('[Order] Load Orders');
export const loadOrdersSuccess = createAction('[Order] Load Orders Success', props<{ orders: Order[] }>());
export const loadOrdersFailure = createAction('[Order] Load Orders Failure', props<{ error: string }>());

export const createOrder = createAction('[Order] Create Order', props<{ order: Order }>());
export const createOrderSuccess = createAction('[Order] Create Order Success', props<{ order: Order }>());
export const createOrderFailure = createAction('[Order] Create Order Failure', props<{ error: string }>());

// Update Order
export const updateOrder = createAction(
    '[Order] Update Order',
    props<{ id:number,order: Order }>()
  );

  export const updateOrderSuccess = createAction(
    '[Order] Update Order Success',
    props<{ order: Order }>()
  );
  export const updateOrderFailure = createAction(
    '[Order] Update Order Failure',
    props<{ error: string }>()
  );
// Delete Order
export const deleteOrder = createAction(
    '[Order] Delete Order',
    props<{ id: number }>()
  );
  export const deleteOrderSuccess = createAction(
    '[Order] Delete Order Success',
    props<{ id: number }>()
  );
  export const deleteOrderFailure = createAction(
    '[Order] Delete Order Failure',
    props<{ error: string }>()
  );