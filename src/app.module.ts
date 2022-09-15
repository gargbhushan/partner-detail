import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { informationController } from './controller/partner.controller';
import { PartnerService } from './service/partnerInfo.service';
import { ConfigModule } from '@nestjs/config';
import { partnerInfoModule } from './Module/partner.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type:"postgres",
      host:"localhost",
      port:5432,
      username:"postgres",
      password:"password",
      database:"partner",
      // logging:true,
      autoLoadEntities: true,
      synchronize:true

    }),
    partnerInfoModule  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
