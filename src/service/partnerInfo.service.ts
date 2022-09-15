import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, NotFoundError } from "rxjs";
import { AddressDTO, infomationDTO } from "src/Enitity/partner.dto";
import { partnerInfo, Partner_address, Partner_contact } from "src/Enitity/partner.enitiy";
import { infomation,Address,Contact } from "src/Enitity/partnerinfo.interface";
import { Repository } from "typeorm";

@Injectable()
export class PartnerService{
    constructor(
        @InjectRepository(partnerInfo)
        public readonly partnerInfoRepository:Repository<partnerInfo>
    ){}
    create(infomation:infomation){
    return from(this.partnerInfoRepository.save(infomation)) 
    }
    findAll(){
        return from(this.partnerInfoRepository.find());
    }
    findone(partnerId:number){
        return from(this.partnerInfoRepository.findOneBy({partnerId}))
    }
    async update(partnerId:number,infomation:infomation){
        // const group = await this.partnerInfoRepository.findOne(partnerId)
    }
    delete(partnerId:number){
        return from(this.partnerInfoRepository.delete(partnerId))
    }
    
     getAllInfo(){
        return this.partnerInfoRepository.find({relations:['partneraddress','partner_contacts']})
    }
    
    async getbyid(partnerid:number){
    return await this.partnerInfoRepository.find({
        where:{
            parent_id:partnerid
        },
        relations:["partneraddress","partner_contacts"]
    })
    }
    

}


@Injectable()
export class PartnerAddressService{
    constructor(
        @InjectRepository(Partner_address)
        private partnerAddressRepository:Repository<Partner_address>
    ){}
    create(Address:Address){
        return from(this.partnerAddressRepository.save(Address)) 
        }
        findAll(){
            return from(this.partnerAddressRepository.find());
        }
        findone(id:number){
            return from(this.partnerAddressRepository.findOneBy({id}))
        }
        update(id:number,Address:Address){
            return from(this.partnerAddressRepository.update(id,Address))
        }
        delete(id:number){
            return from(this.partnerAddressRepository.delete(id))
        }
        async createAddress(address1:AddressDTO,partnerInfo:partnerInfo){
            const NewAddress = await this.partnerAddressRepository.save({country:address1.country})
            partnerInfo.country = [...address1.country,NewAddress]
            await partnerInfo.save()
            return NewAddress
        }
}

@Injectable()
export class PartnerContactService{
    constructor(
        @InjectRepository(Partner_contact)
        private partnerContactRepository:Repository<Partner_contact>       

    ){}
    create(Contact:Contact){
        return from(this.partnerContactRepository.save(Contact))
    }
    findAll(){
        return from(this.partnerContactRepository.find());
    }
    findone(id:number){
        return from(this.partnerContactRepository.findOneBy({id}))
    }
    update(id:number,Contact:Contact){
        return from(this.partnerContactRepository.update(id,Contact))
    }
    delete(id:number){
        return from(this.partnerContactRepository.delete(id))
    }
    
}


