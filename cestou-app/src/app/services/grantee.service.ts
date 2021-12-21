import { Injectable } from '@angular/core';
import { Grantee } from '../interfaces/grantee';

@Injectable({
  providedIn: 'root'
})
export class GranteeService {

  grantees: Grantee[] = [
    {
      id: 1,
      ownerId: 1,
      familyMembersAmount: 3,
      ownerInstitutionId: 1,
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
    },
    {
      id: 2,
      ownerId: 1,
      familyMembersAmount: 2,
      creationDate: new Date("2021/04/24"),
      responsiblePerson: {
        ssn: 12345678902,
        firstName: "Maria",
        lastName: "Da Silva",
        email: "mariasilva@gmail.com",
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
    },
  ];

  constructor() { }

  getGrantee(granteeId: number) : Grantee | undefined {
    return this.grantees.find(m => m.id === granteeId);
  }

  public getGranteesByOwner(ownerId: number): Grantee[] {
    return this.grantees.filter(m => m.ownerId === ownerId);
  }
}
