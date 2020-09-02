import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstName: new FormControl(''),
    lastName: new FormControl(''),

  });

  onRegister() {
    const { email, password, firstName, lastName } = this.registerForm.value;
    this.auth.register(email, password, firstName, lastName);
  }
}
