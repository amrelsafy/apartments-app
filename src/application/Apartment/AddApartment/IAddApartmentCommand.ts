import { Apartment } from "src/domain/Apartment";

export interface IAddApartmentCommand{
    execute(item: Apartment): Promise<Apartment>;
}