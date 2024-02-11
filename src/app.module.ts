import { Module } from '@nestjs/common';
import ApiController from './api'
import { ApartmentModule } from './application/Apartment/ApartmentModule';

@Module({
  imports: [ApartmentModule],
  controllers: ApiController,
  providers: [],
})
export class AppModule {}
