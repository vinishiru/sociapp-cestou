import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userInfo: User = {
    firstName: 'Vinícius',
    lastName: 'Oliveira e Silva',
    email: 'vini.shiru@gmail.com'
  };

  constructor() { }

  getUserInfo(): User {
    return this.userInfo;
  }

  saveUserInfo(userInfo: User): void {
    this.userInfo = userInfo;
  }
}
