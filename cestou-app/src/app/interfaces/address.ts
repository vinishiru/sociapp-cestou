export interface Address {
    zipCode: string,
    address: string,
    district: string,
    complement?: string,

    city: string,
    state: string,

    latitude?: string,
    longitude?: string

}