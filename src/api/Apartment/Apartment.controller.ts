import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AddApartmentCommand } from "src/application/Apartment/AddApartment/AddApartmentCommand.service";
import { GetApartmentDetailsCommand } from "src/application/Apartment/GetApartmentDetails/GetApartmentDetailsCommand.service";
import { GetApartmentsCommand } from "src/application/Apartment/GetApartments/GetApartmentsCommand.service";
import { Apartment } from "src/domain/Apartment";

@Controller('api/apartments')
export default class ApartmentController{
    constructor(private getApartmentsCommand: GetApartmentsCommand,
                private getApartmentDetailsCommand: GetApartmentDetailsCommand,
                private addApartmentCommand: AddApartmentCommand) {}

    @Get()
    async getApartments(){
        const res = await this.getApartmentsCommand.execute();
        return res;
    }

    @Get(':id')
    async getApartmentDetails(@Param('id') id: string){
        const res = await this.getApartmentDetailsCommand.execute(id);
        return res;
    }

    @Post()
    async addApartment(@Body() item: Apartment){
        const res = await this.addApartmentCommand.execute(item);
        return res;
    }
}