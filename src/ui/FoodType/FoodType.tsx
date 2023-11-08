import { FC } from 'react'
import styles from './FoodType.module.css'
import breakfast from '../../assets/breakfast.svg'

interface FoodTypeProps {
  img?: string
  name: string
  amount: number
}

const bgColor: string[] = [
  '#cfdddb',
  '#e4cded',
  '#c2dbe9',
  '#c9caef',
  '#fac1d9',
  '#e5dade',
  '#f1c8d0',
  '#c2e9dd'
]

const FoodType: FC<FoodTypeProps> = ({ img, name, amount }) => {
  return (
    <li
      className={styles.typeBox}
      style={{
        background: bgColor[Math.floor(Math.random() * bgColor.length)]
      }}
    >
      <img className={styles.image} src={breakfast} />
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.amount}>{amount} рецептов</p>
      </div>
    </li>
  )
}

export default FoodType
