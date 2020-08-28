import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductsService) { }
  selected = "";
  categories = [];

  ngOnInit(): void {
    this.getAllCategories();
  }

  addProductForm = new FormGroup({
    kategorija: new FormControl(''),
    naziv: new FormControl('')
  })

  addProduct() {
    const { naziv } = this.addProductForm.value
    this.productService.addProduct(naziv);
  }

  getAllCategories() {
    this.categories = this.productService.getAllCategories();
    console.log(this.categories)
  }

  test() {
    this.productService.test();
  }
}
