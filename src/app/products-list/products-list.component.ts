import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products = [];
  constructor(private productsService: ProductsService) {
    this.productsService.getAllProducts().subscribe(product => console.log(product));
  }



}
