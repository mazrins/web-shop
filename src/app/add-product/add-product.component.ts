import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories = [];
  constructor(private productService: ProductsService, private router: Router) {
    this.productService.getAllCategories().subscribe(category => this.categories = category);
  }
  selected = "";
  path: string = "";

  ngOnInit(): void { }

  addProductForm = new FormGroup({
    category: new FormControl(''),
    name: new FormControl(''),
    pictureUrl: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl('')
  })

  addCategory() {
    console.log("add category")
  }

  addProduct() {
    const { category, name, pictureUrl, description, price } = this.addProductForm.value;
    const proizvod = {
      category: category,
      name: name,
      description: description,
      pictureUrl: pictureUrl,
      price: price,

    }
    this.productService.addProduct(proizvod);
    this.router.navigate(["/"]);

  }

  getAllCategories() {
    console.log("getAllCategories");
  }

  upload($event) {
    this.path = $event.target.files[0];
  }

  uploadImage() {

  }


}
