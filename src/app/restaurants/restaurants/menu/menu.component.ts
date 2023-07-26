import { Component, Input, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurant.service';
import { Restaurant } from 'src/app/model/restaurant.model';
import { Menu } from 'src/app/model/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() restaurant: Restaurant = new Restaurant();

  menu: Menu = new Menu();

  constructor(private service: RestaurantService) { }

  ngOnInit(): void {
    this.service.getMenu(this.restaurant._id).subscribe({
      next: (menu: Menu) => {
        this.menu = menu;
        console.log(this.menu);
        console.log(this.restaurant._id);
        
        
      },
      error: (err: any) => console.log(err),
    });
  }
}
