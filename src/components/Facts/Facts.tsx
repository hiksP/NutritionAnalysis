import Fact from '../../ui/Fact/Fact'
import styles from './Facts.module.css'

const Facts = () => {
  return (
    <div className={styles.factsBox}>
      <h2 className={styles.title}>Nutrition Facts</h2>
      <p className={styles.boldtext}>Amount Per Serving</p>
      <div className={styles.calories}>
        <p className={styles.bigtext}>Calories</p>
        <p className={styles.bigtext}>1774</p>
      </div>
      <p className={styles.dailyvalue}>% Daily Value*</p>
      <ul className={styles.list}>
        <Fact name={'Total fat'} weight={18} percentage={25} />
        <Fact name={'Total fat'} weight={18} percentage={25} />
        <Fact name={'Total fat'} weight={18} percentage={25} />
        <Fact name={'Total fat'} weight={15} percentage={25} />
      </ul>
    </div>
  )
}

export default Facts
