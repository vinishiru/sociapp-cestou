import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userInfo: Person = {
    firstName: 'Vinícius',
    lastName: 'Oliveira e Silva',
    email: 'vini.shiru@gmail.com',
    birthDate: new Date(1988, 10, 23),
    ssn: 12345678902,
    phoneNumber: "31999999999"
  };

  constructor() { }

  getUserInfo(): Person {
    return this.userInfo;
  }

  saveUserInfo(userInfo: Person): void {
    this.userInfo = userInfo;
  }
}
