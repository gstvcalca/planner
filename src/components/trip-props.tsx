export interface TripProps{
    id: string
    destination: string
    starts_at: string
    ends_at: string
    is_confirmed: boolean
    created_by: {name: string, email: string, img_url: string}
    img_url: string
    description: string
    guests: {name: string, email: string, url: string}[]
    infos: {title: string, description: string}[]
    links: {title: string, url: string}[]
    activities: {title: string, occurs_at: Date}[]
    category: string[]
}
