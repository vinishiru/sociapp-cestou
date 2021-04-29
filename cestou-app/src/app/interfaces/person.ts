import { Address } from "./address";

export interface Person {
    ssn: number,
    firstName: string,
    lastName: string,
    birthDate: Date,
    email?: string,
    phoneNumber?: string,
    address?: Address
}