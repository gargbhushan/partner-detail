import{Controller, Get,Post,Body, Delete, Param, UsePipes, ValidationPipe, ParseIntPipe, Put, Patch} from "@nestjs/common";
import { AddressDTO, ContactDTO, infomationDTO } from "src/Enitity/partner.dto";
import { Address, Contact } from "src/Enitity/partnerinfo.interface";


import { PartnerAddressService, PartnerContactService, PartnerService } from "src/service/partnerInfo.service";
@Controller("/partnerInfo")
export class informationController{
    constructor(private partnerservice:PartnerService){}
    @Post()
    create(@Body() informationDto: infomationDTO ){
        this.partnerservice.create(informationDto)
    }
    @Get()
    findAll(){
        return this.partnerservice.findAll();
    }
    @Delete(':id')
    remove(@Param('id') id:number){
        return this.partnerservice.delete(+id);
    }
    @Get("/new/get")                                  // all the data can view
    findAllget(){
        return this.partnerservice.getAllInfo()
    }
    @Get("/new/get/:id")                             // only Id data can be view
    getall(@Param('id') id:number){
        return this.partnerservice.getbyid(+id)
    }
}

@Controller("/Address")
export class AddressController{
    constructor(private PartnerAddressService:PartnerAddressService,private partnerService:PartnerService){}
    @Post()
    create(@Body() AddressDto: AddressDTO ){
        this.PartnerAddressService.create(AddressDto)
    }
    @Get()
    findAll(){
        return this.PartnerAddressService.findAll();
    }
    @Delete(':id')
    remove(@Param('id') id:number){
        return this.PartnerAddressService.delete(+id);
    }
    @Post("/new/")
    
    async saveAddress(@Body() address1:AddressDTO){
        const partner = await this.partnerService.getbyid(address1.partneridpartnerid)
        // return await this.PartnerAddressService.createAddress(address1,partner)
    }    
    @Patch(":id")
    updateCOntact(@Param('id') id:number , @Body() Address:Address){
        return this.PartnerAddressService.update(id,Address)
    }
    @Get("/new/get")
    findEvery(){
        return this.partnerService.getAllInfo()
    }
}

@Controller("/Contact")
export class ContactController{
    constructor(private PartnerContactService:PartnerContactService){}
    @Post()
    create(@Body() contactDto: ContactDTO ){
        this.PartnerContactService.create(contactDto)
    }
    @Get()
    findAll(){
        return this.PartnerContactService.findAll();
    }
    @Delete(':id')
    remove(@Param('id') id:number){
        return this.PartnerContactService.delete(+id);
    }
    @Patch(":id")
    updateCOntact(@Param('id') id:number , @Body() Contact: Contact){
        return this.PartnerContactService.update(+id,Contact)
    }
}


