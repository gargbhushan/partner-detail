import { IsNotEmpty, isNotEmpty, Length, MaxLength, maxLength } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn,OneToMany, ManyToOne } from "typeorm";

@Entity("Partners")
export class partnerInfo{
    [x: string]: any;

    @PrimaryGeneratedColumn("rowid")
    partnerId: number;

    
    @Column({default:"inter",length:50})
    partner_code: string;

    @Column({default:"inter",length:50})
    @Length(100)
    partner_name : string;

    @IsNotEmpty()
    @Column({default:"inter",length:50})
    partner_type:string;

    @Column({unique:true})
    parent_id:number;

    // @Column()
    // geo_location:Location; 
    
    // @OneToMany(() => Partner_address,(Partner_address)=>Partner_address.PartnerInfo)
    // partneraddress:Partner_address[]
    
    // @OneToMany(()=>Partner_contact,(partner_contact)=>{partner_contact.PartnerInfo},{cascade:true})
    // partner_contacts:Partner_contact[]

    @OneToMany(()=>Partner_contact,(partner_contact:Partner_contact)=>partner_contact.PartnerInfo)
    partner_contacts:Partner_contact[]

    @OneToMany(()=> Partner_address,(partner_address:Partner_address)=>partner_address.address) // one time try
    partneraddress:Partner_address[]


}

@Entity("Partner_address")
export class Partner_address{
    @PrimaryColumn()

    id:number;
    @Column({length:50})
    type: string;

    @Column({length:250})
    line1:string;

    @Column({length:250})
    line2:string;

    @Column({length:50})
    city:string;

    @Column({length:50})
    state:string;

    @Column({length:50})
    country:string;

    @Column()
    zipcode: number; 
    // @ManyToOne(() => partnerInfo,(PartnerInfo) =>PartnerInfo.partneraddress) 
    // PartnerInfo:partnerInfo
    @ManyToOne(()=>partnerInfo,(address:partnerInfo)=>address.partneraddress)
    address:partnerInfo
}

@Entity("Partner_contact")
export class Partner_contact{
    @PrimaryColumn()
    id : number;
    @Column({length:50})
    type:string
    @Column({length:100})
    value:string;

    @ManyToOne(()=>partnerInfo,(PartnerInfo)=>PartnerInfo.partner_contacts)
    PartnerInfo:partnerInfo
}
