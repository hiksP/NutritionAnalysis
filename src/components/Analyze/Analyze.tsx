import styles from './Analyze.module.css'

const Analyze = () => {
  return (
    <form className={styles.container}>
      <p className={styles.text}>
        Enter an ingredient list list for what you are cooking, like "1 cup
        rice, 10 oz chickpeas", etc. Enter each ingredient on a new line.
      </p>
      <textarea className={styles.input}></textarea>
      <button className={styles.button}>Analyze</button>
    </form>
  )
}

export default Analyze
