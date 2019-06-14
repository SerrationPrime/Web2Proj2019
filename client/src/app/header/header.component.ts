import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean = false;
  public jwt;

  constructor() { }

  ngOnInit() {
    this.jwt = localStorage.jwt;
    if (this.jwt) {
      if (localStorage.role === "Admin") {
        this.isAdmin = true;
      }
    }
  }

  checkAuth() {
    
    if (this.jwt) {
      
      if (localStorage.role === "Admin") {
        this.isAdmin = true;
      }
    }
  }

}
