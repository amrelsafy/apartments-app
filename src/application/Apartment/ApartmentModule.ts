import { Module } from "@nestjs/common";
import { ApartmentRepositoryModule } from "src/persistance/db/ApartmentRepository/ApartmentRepository.module";
import { GetApartmentsCommand } from "./GetApartments/GetApartmentsCommand.service";
import { GetApartmentDetailsCommand } from "./GetApartmentDetails/GetApartmentDetailsCommand.service";
import { AddApartmentCommand } from "./AddApartment/AddApartmentCommand.service";

@Module({
    imports: [ApartmentRepositoryModule],
    exports: [GetApartmentsCommand, GetApartmentDetailsCommand, AddApartmentCommand],
    providers: [GetApartmentsCommand, GetApartmentDetailsCommand, AddApartmentCommand]
})

export class ApartmentModule {}