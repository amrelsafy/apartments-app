import { Apartment } from "src/domain/Apartment";

export interface IGetApartmentsCommand {
    execute(): Promise<Apartment[]>
}