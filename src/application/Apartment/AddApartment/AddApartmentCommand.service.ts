import { Injectable } from "@nestjs/common";
import { IAddApartmentCommand } from "./IAddApartmentCommand";
import { Apartment } from "src/domain/Apartment";
import { IApartmentRepository } from "src/application/interfaces/IApartmentRepository";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AddApartmentCommand implements IAddApartmentCommand{

    constructor(private apartmentRepo: IApartmentRepository){}

    async execute(item: Apartment): Promise<Apartment> {
        let newItem = {...item, id: uuidv4() }
        let apartment = this.apartmentRepo.createApartment(newItem);
        return apartment;
    }

}