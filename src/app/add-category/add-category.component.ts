import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {

  }

  addCategoryForm = new FormGroup({
    name: new FormControl('')
  })

  addCategory() {
    const { name } = this.addCategoryForm.value
    this.productService.addCategory(name);

  }
}
