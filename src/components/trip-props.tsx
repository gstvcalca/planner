export interface TripProps{
    _id: string
    destination: string
    starts_at: string
    ends_at: string
    is_confirmed: boolean
    created_by: {_id: string, name: string, email: string, img_url: string}
    img_url: string
    description: string
    guests: {_id: string, name: string, email: string, img_url: string, is_confirmed: boolean}[]
    infos: {title: string, description: string}[]
    links: {title: string, url: string}[]
    activities: {_id: string, activity_date: string, day_activities: {title: string, occurs_at: string}[]}[]
    category: string
}
