import { Component, OnInit } from '@angular/core';
import { AuthHttpService } from '../services/auth-http.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean = false;
  isLogged: boolean = false;
  isController: boolean = false;
  public jwt;

  constructor(private http: AuthHttpService, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.jwt = localStorage.jwt;
    this.checkAuth();
    console.log(this.jwt);
    console.log(this.isLogged);
    console.log(this.isAdmin);
    this.cdRef.detectChanges();
  }

  checkAuth() {
    if (this.jwt) {
      if (localStorage.role === "Admin") {
        this.isAdmin = true;
      }
      else if (localStorage.role === "Controller") {
        this.isController = true;
      }
      this.isLogged = true;
    }
  }

  logOut() {
    this.http.logOut();
    location.reload();
  }

}
