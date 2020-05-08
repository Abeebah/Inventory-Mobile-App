import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'purchases', loadChildren: './purchases/purchases.module#PurchasesPageModule' },
  { path: 'sales', loadChildren: './sales/sales.module#SalesPageModule' },
  { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'stock', loadChildren: './stock/stock.module#StockPageModule' },
  { path: 'addsale', loadChildren: './addsale/addsale.module#AddsalePageModule' },
  { path: 'addpurchase', loadChildren: './addpurchase/addpurchase.module#AddpurchasePageModule' },
  { path: 'addcustomer', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
