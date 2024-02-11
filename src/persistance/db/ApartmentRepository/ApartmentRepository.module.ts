import { Module } from "@nestjs/common";
import { IApartmentRepository } from "src/application/interfaces/IApartmentRepository";
import { ApartmentRepository } from "./ApartmentRepository.service";

@Module({
    providers:[{ useClass: ApartmentRepository, provide: IApartmentRepository}],
    exports:[IApartmentRepository]
})

export class ApartmentRepositoryModule {}