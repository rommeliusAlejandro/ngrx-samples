import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StateManagementModule} from "./state-management/state-management.module";

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StateManagementModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
