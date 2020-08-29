import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories = [];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe(category => this.categories = category);
  }

}
