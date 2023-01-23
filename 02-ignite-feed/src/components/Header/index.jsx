import styles from './header.module.css'

import igniteLogo from '../../assets/ignite-logo.svg'

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={igniteLogo} alt="Ignite Feed" />
    </div>
  )
}
