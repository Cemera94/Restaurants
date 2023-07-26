import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from 'src/app/model/restaurant.model';
import { MenuComponent } from '../menu/menu.component';


@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent implements OnInit {

  @Input() restaurant: Restaurant = new Restaurant()
  @Input() ocena: number = 0;
  stars: string[] = [];
  @Input() novac: number = 0;
  coins: string[] = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    let fullStarCount = this.ocena;
    let emptyStarCount = 5 - fullStarCount;
    let fullCoinCount = this.novac;
    let emptyCoinCount = 5 - fullCoinCount;

    this.stars = Array(fullStarCount).fill('star-full.png');
    this.stars = this.stars.concat(Array(emptyStarCount).fill("star-empty.png"))

    this.coins = Array(fullCoinCount).fill("coin-full.png");
    this.coins = this.coins.concat(Array(emptyCoinCount).fill("coin-empty.png"));
    
  }

 
    open() {
      const modalRef = this.modalService.open(MenuComponent);
      modalRef.componentInstance.restaurant = this.restaurant;
  }

}
