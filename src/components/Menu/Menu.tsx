import MenuLink from '../../ui/MenuLink/MenuLink'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <MenuLink link='Анализировать'></MenuLink>
        <MenuLink link='Обо мне'></MenuLink>
      </ul>
    </nav>
  )
}

export default Menu
