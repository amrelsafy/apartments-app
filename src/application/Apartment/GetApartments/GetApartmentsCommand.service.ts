import { Apartment } from "src/domain/Apartment";
import { IGetApartmentsCommand } from "./IGetApartmentsCommand";
import { IApartmentRepository } from "src/application/interfaces/IApartmentRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GetApartmentsCommand implements IGetApartmentsCommand{

    constructor(private apartmentRepo: IApartmentRepository){}

    async execute(): Promise<Apartment[]> {
        let apartments = await this.apartmentRepo.getAllApartments();
        return apartments;
    }
    
}