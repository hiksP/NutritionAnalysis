import FoodType from '../../ui/FoodType/FoodType'
import styles from './FoodTypes.module.css'

const FoodTypes = () => {
  return (
    <ul className={styles.foodList}>
      <FoodType img={''} name={'Breakfast'} amount={0}></FoodType>
    </ul>
  )
}

export default FoodTypes
