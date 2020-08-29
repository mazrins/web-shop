import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoryComponent } from './category/category.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { AddCategoryComponent } from './add-category/add-category.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'search', component: SearchComponent },
  { path: 'add-category', component: AddCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
