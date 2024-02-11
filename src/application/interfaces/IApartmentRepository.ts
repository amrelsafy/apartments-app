import { Apartment } from "src/domain/Apartment";

export abstract class IApartmentRepository{
    abstract getAllApartments(): Promise<Apartment[]>;
    abstract getApartmentById(id: string): Promise<Apartment>;
    abstract createApartment(item: Apartment): Promise<Apartment>;
}