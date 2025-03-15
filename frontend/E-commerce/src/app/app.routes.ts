import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './forms/product-form/product-form.component';
import { ProductEditComponent } from './forms/product-edit/product-edit.component'; 

export const routes: Routes = [
    { path: '', component: ProductComponent },
    { path: 'app-product-form', component: ProductFormComponent }, 
    { path: 'app-product-edit/:id', component: ProductEditComponent }, 
];



