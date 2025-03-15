import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Order } from '../services/order.service';
import * as OrderActions from '../store/actions/order.actions';
import { selectAllOrders } from '../store/selectors/order.selector';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderComponent implements OnInit {
  orders$: Observable<Order[]>;

  constructor(private store: Store) {
    this.orders$ = this.store.select(selectAllOrders);
  }

  ngOnInit(): void {
    this.store.dispatch(OrderActions.loadOrders());
  }

  onDelete(id: number): void {
    this.store.dispatch(OrderActions.deleteOrder({ id }));
  }

  onUpdate(id: number, order: Order): void {
    this.store.dispatch(OrderActions.updateOrder({ id, order }));
  }

  onCreate(order: Order): void {
    this.store.dispatch(OrderActions.createOrder({ order }));
  }
}
