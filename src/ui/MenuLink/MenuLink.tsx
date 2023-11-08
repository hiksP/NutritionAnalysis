import { FC } from 'react'
import styles from './MenuLink.module.css'

interface LinkProps {
  link: string
}

const MenuLink: FC<LinkProps> = ({ link }) => {
  return <li className={styles.link}>{link}</li>
}

export default MenuLink
