import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = <any>[];

  constructor(private db: AngularFirestore) {
    this.users = this.db.collection('users').valueChanges();

  }

  getUsers() {
    return this.users;
  }

}

