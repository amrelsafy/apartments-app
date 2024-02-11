import { Apartment } from "src/domain/Apartment";

export interface IGetApartmentDetailsCommand {
    execute(id: string): Promise<Apartment>;
}