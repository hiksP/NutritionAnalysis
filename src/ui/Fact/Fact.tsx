import { FC } from 'react'
import styles from './Fact.module.css'

interface FactProps {
  name: string
  weight: number
  percentage: number
}

const Fact: FC<FactProps> = ({ name, weight, percentage }) => {
  return (
    <li className={styles.container}>
      <div className={styles.leftContainer}>
        <p className={styles.textbold}>{name}</p>
        <p className={styles.weight}>{weight} g</p>
      </div>
      <p className={styles.textbold}>{percentage} %</p>
    </li>
  )
}

export default Fact
