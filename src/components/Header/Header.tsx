import styles from './Header.module.css'
import Logo from '../../assets/burger.svg'
import Search from '../Search/Search'
import { FC } from 'react'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={Logo} className={styles.logo} />
        <h1 className={styles.title}>Nutrition Analysis</h1>
      </div>
      <Search></Search>
    </header>
  )
}

export default Header
