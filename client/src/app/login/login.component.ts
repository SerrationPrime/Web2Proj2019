import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../models/user'
import { AuthHttpService } from '../services/auth-http.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  constructor(private http: AuthHttpService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.login.status === 'VALID') {
      var userData = new User;
      userData = this.login.value;
      this.http.logIn(userData, () => this.router.navigate(['/home']));
    }

  }

}
