import { Injectable } from '@angular/core';
import { Grantee } from '../interfaces/grantee';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class GranteeService {

  grantees: Grantee[] = [
    {
      id: 1,
      ownerId: 1,
      creationDate: new Date("2021/04/24"),
      responsiblePerson: {
        ssn: 12345678902,
        firstName: "Joãozin",
        lastName: "Da Silva",
        email: "joaosilva@gmail.com",
        birthDate: new Date(1988, 10, 23),
        phoneNumber: "031999999999",
      },
      address: {
        address: 'Rua Dalvo Trombeta',
        city: 'Birigui',
        district: 'Gonhonha',
        state: 'MG',
        zipCode: '12-345678'
      }
    }
  ];

  constructor() { }

  getGrantee(granteeId: number) {
    return this.grantees.find(m => m.id === granteeId);
  }

  public getGranteesByOwner(ownerId: number): Grantee[] {
    return this.grantees.filter(m => m.ownerId === ownerId);
  }
}
