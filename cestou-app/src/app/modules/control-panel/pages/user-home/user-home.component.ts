import { Component, OnInit } from '@angular/core';
import { defaultRouteAnimation } from 'src/app/shared/animations';
import { User } from '../../../../interfaces/user';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
  animations: [
    defaultRouteAnimation
  ]
})
export class UserHomeComponent implements OnInit {

  user: User = {
    firstName: "Vinícius",
    lastName: 'Oliveira e Silva',
    email: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
