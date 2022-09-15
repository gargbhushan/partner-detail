import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressController, ContactController, informationController } from 'src/controller/partner.controller';
import { partnerInfo, Partner_address, Partner_contact } from 'src/Enitity/partner.enitiy';
import { PartnerAddressService, PartnerContactService, PartnerService } from 'src/service/partnerInfo.service';
@Module({
    imports:[
        TypeOrmModule.forFeature([partnerInfo,Partner_address,Partner_contact])
    ],
    controllers:[informationController,AddressController,ContactController],
    providers:[PartnerService,PartnerAddressService,PartnerContactService]
})
export class partnerInfoModule{}