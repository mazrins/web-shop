import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  showFiller: boolean = false;
  isOpen: boolean = false;
  isLogedIn: any;
  constructor(private auth: AuthService) { }

  arrowIcon() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit(): void {
    this.isLogedIn = this.auth.isAuthenticated();
  }

}
