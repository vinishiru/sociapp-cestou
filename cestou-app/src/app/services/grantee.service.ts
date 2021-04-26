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
        firstName: "João",
        lastName: "Da Silva",
        email: "joaosilva@gmail.com"
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
