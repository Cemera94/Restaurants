import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { RestaurantSearch } from 'src/app/model/restaurant-search.model';
import { Restaurant } from 'src/app/model/restaurant.model';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [];
  count: number = 0;

  queryParams = {
    page: 1,
    pageSize: 9,
    filter: {
      cuisine: "",
      priceFrom: 1,
      priceTo: 5
    }
  }

  priceFromControl = new FormControl(1);
  priceToControl = new FormControl(5);

  

  constructor(
    private service: RestaurantService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let cuisine = params['cuisine'];
      if (cuisine == "all") {
        cuisine = "";
      }
      this.queryParams.filter.cuisine = cuisine;
      this.getRestaurants()
    })
  }

  getRestaurants(): void {
    this.service.getAll(this.queryParams).subscribe({
      next: (restaurantSearchResult: RestaurantSearch) => {
        this.restaurants = restaurantSearchResult.results
        this.count = restaurantSearchResult.count
      },
      error: (err) => { console.log(err) }
    })
  }

  onPageChanged(newPage: number){
    this.queryParams.page = newPage;
    this.getRestaurants();
  }

  onPriceChanged(): void{
    this.queryParams.filter.priceFrom = this.priceFromControl.value || 1;
    this.queryParams.filter.priceTo = this.priceToControl.value || 1;
    this.getRestaurants();
  }
}
