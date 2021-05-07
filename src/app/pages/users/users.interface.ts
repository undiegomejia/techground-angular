export interface User {
    id?: number
    name?: string
    username?:string
    email?:string
    phone?:string
    website?:string
}

export interface Address{
        street?: string
        suite?: string
        city?: string
        zipcode:string
}

export interface Geo {
    lat: string
    lng:string
}

export interface Company {
    name?:string
    catchPhrase?:string
    bs?: string
}