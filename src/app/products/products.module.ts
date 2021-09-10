import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import {ProductsRoutingModule} from "./products-routing.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ProductsListComponent,
    NewProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
