import Image from "next/image";
import styles from "./page.module.css";
import ApartmentCard from "./components/ApartmentCard/ApartmentCard";
import { Apartment } from "./interfaces/Apartment";
require('dotenv').config();

export default async function Home() {

  let res = await fetch('http://localhost:3001/api/apartments');
  let apartments: Apartment[] = await res.json();

  return (
    <div>
      <header>
        <nav>
          <h1>Apartments</h1>
        </nav>
      </header>
      <main>
        <ul className="apartmentCardContainer">
          {apartments.map((apartment) => <ApartmentCard key={apartment.id} apartment={apartment}/>)}
        </ul>
      </main>
    </div>
  );
}
