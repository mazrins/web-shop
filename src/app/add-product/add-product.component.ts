import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories = [];
  constructor(private productService: ProductsService) {
    this.productService.test().subscribe(category => this.categories = category);
  }
  selected = "";


  ngOnInit(): void { }

  addProductForm = new FormGroup({
    kategorija: new FormControl(''),
    naziv: new FormControl('')
  })

  addCategory() {
    console.log("add category")
  }

  addProduct() {
    const { naziv, kategorija } = this.addProductForm.value;
    const proizvod = {
      naziv: naziv,
      kategorija: kategorija

    }
    this.productService.addProduct(proizvod);
  }

  getAllCategories() {
    console.log("getAllCategories");
  }


}
