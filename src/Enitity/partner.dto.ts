
import { IsInt, IsNotEmpty, IsPhoneNumber, length, Length, max, MaxLength, min } from "class-validator";


export class infomationDTO{
    @IsNotEmpty()
    partnerid:number;
    partner_code:string;
    partner_name:string;
    partner_type:string;
    parent_id:number;
    geo_location?:Location;

}
export class AddressDTO{
    id:number;
    @Length(1,50)
    type:string;
    @Length(50)
    line1:string;
    @Length(50)
    line2:string;
    @Length(150)
    city:string;
    @Length(150)
    state:string;
    @Length(150)
    country:string;
    @Length(150)
    zipcode : number;
    partneridpartnerid:number;

}

export class ContactDTO{
    id:number;
    
    type:string;

    @MaxLength(10)
    @IsInt()
    @IsPhoneNumber('IN')
    phone:number;
}