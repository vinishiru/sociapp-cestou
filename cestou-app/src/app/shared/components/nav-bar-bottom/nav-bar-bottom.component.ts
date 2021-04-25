import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar-bottom',
  templateUrl: './nav-bar-bottom.component.html',
  styleUrls: ['./nav-bar-bottom.component.css']
})
export class NavBarBottomComponent implements OnInit {

  currentYear: number = new Date().getFullYear();
  
  constructor() { }

  ngOnInit(): void {
  }

}
