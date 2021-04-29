import { Person } from "./person";


export interface Grantee {
    id: number,
    ownerId: number,
    ownerInstitutionId?: number,

    responsiblePerson: Person,
    creationDate: Date,
    granteeMembersAmount?: number
}