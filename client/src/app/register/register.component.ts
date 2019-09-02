import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserBindingModel } from './model/userBindingModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    userType: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    confirmationImageLink: new FormControl('')
  })

  public registerPath = "/api/Account/Register";

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.register.controls.userType.setValue(1);
  }

  onSubmit() {
    let model: UserBindingModel;
    model = this.register.value;
    if (this.register.valid && (model.password == model.confirmPassword)) {
      this.http.post(this.registerPath, model).subscribe(() => {
        this.router.navigate['/login'];
        location.reload();
      })
    }
  }

}
