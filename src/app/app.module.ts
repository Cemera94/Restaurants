import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { RestaurantsComponent } from './restaurants/restaurants/restaurants.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantItemComponent } from './restaurants/restaurants/restaurant-item/restaurant-item.component';
import { PaginationComponent } from './restaurants/restaurants/pagination/pagination.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './restaurants/restaurants/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SidebarComponent,
    RestaurantsComponent,
    RestaurantItemComponent,
    PaginationComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
