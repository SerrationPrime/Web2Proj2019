import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PriceComponent } from './price/price.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { RegisterComponent } from './register/register.component';
import { AdminViewLinesComponent } from './admin-view-lines/admin-view-lines.component';
import { AdminViewStationsComponent } from './admin-view-stations/admin-view-stations.component';
import { AdminViewSchedulesComponent } from './admin-view-schedules/admin-view-schedules.component';
import { AdminViewPricesComponent } from './admin-view-prices/admin-view-prices.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'map', component: MapComponent },
    { path: 'price', component: PriceComponent },
    { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-view-lines', component: AdminViewLinesComponent },
  { path: 'admin-view-stations', component: AdminViewStationsComponent },
  { path: 'admin-view-schedules', component: AdminViewSchedulesComponent },
  { path: 'admin-view-prices', component: AdminViewPricesComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
