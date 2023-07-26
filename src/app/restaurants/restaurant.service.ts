import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RestaurantSearch } from '../model/restaurant-search.model';
import { Menu } from '../model/menu.model';

const baseUrl = "http://localhost:3000/api/restaurants"

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getAll(params?: any): Observable<RestaurantSearch> {
    let options = {};

    if (params) {
      options = {
        params: new HttpParams()
        .set("page", params.page || "")
        .set("pageSize", params.pageSize || "")
        .set("filter", params.filter && JSON.stringify(params.filter) || "")
      }
    }
    return this.http.get(baseUrl, options).pipe(map((data: any)=>{
      return new RestaurantSearch(data)
    }))

  }

  getMenu(restaurantId: number): Observable<Menu> {
    return this.http.get(`${baseUrl}/${restaurantId}/menus`).pipe(
      map((data: any) => {
        return (
          (data && data.results && new Menu(data.results[0])) || new Menu()
        );
      })
    );
  }
}
