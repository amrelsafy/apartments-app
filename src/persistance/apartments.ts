import { Apartment } from "src/domain/Apartment";
import { v4 as uuidv4 } from 'uuid'; 

const apartments: Apartment[] = [
    {
        id: uuidv4(),
        apartmentType: "Villa",
        zone: "New Cairo",
        state: "Cairo",
        price: 5000000,
        area: 249,
        deliveryYear: '2027-01-01',
        bedrooms: 2,
        title: "Villa in New Cairo",
        description: "Villa in New Cairo with 2 bedrooms and area 249 m2"
    },
    {
        id: uuidv4(),
        apartmentType: "Villa",
        zone: "New Cairo",
        state: "Cairo",
        price: 5000000,
        area: 249,
        deliveryYear: '2027-01-01',
        bedrooms: 2,
        title: "Villa in New Cairo",
        description: "Villa in New Cairo with 2 bedrooms and area 249 m2"
    },
    {
        id: uuidv4(),
        apartmentType: "Villa",
        zone: "New Cairo",
        state: "Cairo",
        price: 5000000,
        area: 249,
        deliveryYear: '2027-01-01',
        bedrooms: 2,
        title: "Villa in New Cairo",
        description: "Villa in New Cairo with 2 bedrooms and area 249 m2"
    },
]

export default apartments;