import styles from './Search.module.css'
import searchicon from '../../assets/searchIcon.svg'

const Search = () => {
  return (
    <div className={styles.inputContainer}>
      <img src={searchicon} className={styles.icon} />
      <input placeholder={'Поиск...'} className={styles.input} />
    </div>
  )
}

export default Search
