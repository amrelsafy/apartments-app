import { Injectable } from "@nestjs/common";
import { IGetApartmentDetailsCommand } from "./IGetApartmentDetailsCommand";
import { Apartment } from "src/domain/Apartment";
import { IApartmentRepository } from "src/application/interfaces/IApartmentRepository";

@Injectable()
export class GetApartmentDetailsCommand implements IGetApartmentDetailsCommand{

    constructor(private apartmentRepo: IApartmentRepository){}

    async execute(id: string): Promise<Apartment> {
        let apartment = await this.apartmentRepo.getApartmentById(id);
        return apartment
    }
}