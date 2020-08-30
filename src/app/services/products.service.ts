import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  category = <any>[];
  products = <any>[];
  constructor(private db: AngularFirestore) {
    this.category = this.db.collection('category').valueChanges();
    this.products = this.db.collection('products').valueChanges();
  }

  addCategory(categoryName) {
    this.db.collection('category').add({ name: categoryName });

  }

  addProduct(data) {
    this.db.collection('products').add(data);

  }

  getAllProducts() {
    return this.products;
  }

  getAllCategories() {
    return this.category;
  }


}
