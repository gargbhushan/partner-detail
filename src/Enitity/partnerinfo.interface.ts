export interface infomation{
    partnerid:number;
    partner_code:string;
    partner_name:string;
    partner_type:string;
    parent_id:number;
    // geo_location?:Location;

}
export interface Address{
    id:number;
    type:string;
    line1:string;
    line2:string;
    city:string;
    state:string;
    country:string;
    zipcode : number;

}

export interface Contact{
    id:number;
    type:string;
    
    phone:number;
}