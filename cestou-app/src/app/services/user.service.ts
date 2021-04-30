import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userInfo: Person = {
    firstName: 'Joazinho',
    lastName: 'da Silva ',
    email: 'joazinho.silva@gmail.com',
    birthDate: new Date('23/10/1988'),
    ssn: 12345678902,
    phoneNumber: "31999999999",
    address: {
      zipCode: '31123-789',
      address: 'Rua Dalvo Trombeta',
      city: 'Jiririm do Norte',
      district: 'Marcreudi',
      state: 'MG',
      complement: 'Nenhum'
    }
  };

  constructor() { }

  getUserInfo(): Person {
    return this.userInfo;
  }

  saveUserInfo(userInfo: Person): void {
    this.userInfo = userInfo;
  }
}
