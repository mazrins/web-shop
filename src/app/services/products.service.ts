import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  allCategories = [];
  constructor(private db: AngularFirestore) { }

  getAllProducts() {
    console.log(this.db.collection('products').snapshotChanges());
  }

  addProduct(data) {
    return this.db.collection('products').add({ data });
  }

  getAllCategories() {
    this.db.collection('category').snapshotChanges().subscribe(category => category.forEach(category => console.log(category)))

    this.db.collection('products').snapshotChanges().subscribe(products =>
      products.forEach(product => this.allCategories.push(product.payload.doc.data()))
    )
    return this.allCategories;

  }
  test() {
    // this.db.collection('category').snapshotChanges().subscribe(category => category.forEach(product => console.log(product.payload.doc.data)));

  }
}
