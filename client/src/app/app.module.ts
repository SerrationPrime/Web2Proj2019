import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PriceComponent } from './price/price.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthHttpService } from './services/auth-http.service';
import { TokenInterceptor } from './interceptors/token.interceptor'
import { AdminViewLinesComponent } from './admin-view-lines/admin-view-lines.component';
import { AdminViewStationsComponent } from './admin-view-stations/admin-view-stations.component';
import { AdminViewSchedulesComponent } from './admin-view-schedules/admin-view-schedules.component';
import { AdminViewPricesComponent } from './admin-view-prices/admin-view-prices.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    PriceComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    AdminViewLinesComponent,
    AdminViewStationsComponent,
    AdminViewSchedulesComponent,
    AdminViewPricesComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyDnihJyw_34z5S1KZXp90pfTGAqhFszNJk' }),
    AlertModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
              AuthHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
