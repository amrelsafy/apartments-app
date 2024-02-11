import { Injectable } from "@nestjs/common";
import { IApartmentRepository } from "src/application/interfaces/IApartmentRepository";
import { Apartment } from "src/domain/Apartment";
import apartments from "src/persistance/apartments";

@Injectable()
export class ApartmentRepository extends IApartmentRepository{
    async getAllApartments(): Promise<Apartment[]> {
        try{ 
            return apartments;
        }
        catch(err){
            throw err;
        }
    }

    async getApartmentById(id: string): Promise<Apartment> {
        try{ 
            return apartments.find(apartment => apartment.id === id);
        }
        catch(err){
            throw err;
        }
    }

    async createApartment(item: Apartment): Promise<Apartment> {
        try{
            apartments.push(item);
            return item;
        }
        catch(err){
            throw err;
        }
    }
}