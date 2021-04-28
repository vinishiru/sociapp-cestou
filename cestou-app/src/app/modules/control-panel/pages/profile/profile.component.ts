import { Component, OnInit } from '@angular/core';
import { defaultRouteAnimation } from 'src/app/shared/animations';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [defaultRouteAnimation]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
