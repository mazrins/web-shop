import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = false;
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore
  ) { }

  isAuthenticated() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        return true;
      }
    })
  }

  login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['/']));
  }
  register(email: string, password: string, firstName: string, lastName: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password).then((cred) => {
      return this.db
        .collection('users')
        .doc(cred.user.uid)
        .set({ firstName: firstName, lastName: lastName })
        .then(() => this.router.navigate(['/']));
    });
  }
}
