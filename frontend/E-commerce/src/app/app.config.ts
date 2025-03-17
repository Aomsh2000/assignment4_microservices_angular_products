import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideStore } from '@ngrx/store';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { listReducer } from './store/reducers/product.reducer';
import { ProductEffect } from './store/effects/product.effect';
import { orderReducer } from './store/reducers/order.reducer';
import { OrderEffects } from './store/effects/order.effect';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes), provideClientHydration(withEventReplay()),
     provideHttpClient(),
     provideStore({ products: listReducer }), 
     provideEffects(ProductEffect),
     provideHttpClient(withFetch()),
     provideStore({ orders: orderReducer }), 
     provideEffects(OrderEffects),
    ]
};
