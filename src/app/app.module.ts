import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsService } from './services/products.service';
import { AuthService } from './services/auth.service';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';

import { AuthGuard } from './guard/auth.guard';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductsListComponent,
    ProfileComponent,
    AdminDashboardComponent,
    ShoppingCartComponent,
    AddProductComponent,
    ProductsComponent,
    UsersComponent,
    CategoryComponent,
    AddCategoryComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,

  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    LayoutModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,

  ],
  providers: [AuthService, ProductsService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
