import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PriceComponent } from './price/price.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'map', component: MapComponent },
    { path: 'price', component: PriceComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
