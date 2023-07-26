import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  cuisines = ['All', 'German', 'Chinese', 'American', 'Indian', 'Pizza', 'Vegetarian'];

  constructor() { }

  ngOnInit(): void {
  }

}
