import { Apartment } from '@/app/interfaces/Apartment'
import React from 'react'
import styles from './styles.module.css'

const ApartmentCard = (props: ApartmentCardProps) => {

  return (
    <li className={styles.apartmentCard}>
        <img className={styles.apartmentCardImage} src="/apartment.jpg" alt="Apartment Image" />
        <div className={styles.apartmentCardInfo}>
            <h2 className={styles.apartmentCardTitle}>{props.apartment.title}</h2>
            <p className={styles.apartmentCardDesc}>{props.apartment.description}</p>
        </div>
    </li>
  )
}

type ApartmentCardProps = {
    apartment: Apartment
}

export default ApartmentCard