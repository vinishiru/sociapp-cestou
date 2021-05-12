import { Address } from "./address";
import { Person } from "./person";


export interface Grantee {
    id: number,
    ownerId: number,
    ownerInstitutionId?: number,

    responsiblePerson: Person,
    address: Address,
    creationDate: Date,
    granteeMembersAmount?: number
}