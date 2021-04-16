import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav-menu-item',
  templateUrl: './side-nav-menu-item.component.html',
  styleUrls: ['./side-nav-menu-item.component.css']
})
export class SideNavMenuItemComponent implements OnInit {

  @Input() text?: string;
  @Input() badgeCount?: number;
  @Input() routeUrl?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
