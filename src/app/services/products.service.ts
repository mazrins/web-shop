import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db: AngularFirestore) { }

  getAllProducts() {
    console.log("getAllProducts");
  }
}
