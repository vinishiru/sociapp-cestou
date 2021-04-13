import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  user: User
  
  constructor() {
    
    this.user = {
      name: "Vinícius"
    };

   }

  ngOnInit(): void {
  }

}
