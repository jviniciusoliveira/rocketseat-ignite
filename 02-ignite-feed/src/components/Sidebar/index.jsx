import { PencilLine } from 'phosphor-react'

import styles from './sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <img src="https://images.unsplash.com/photo-1593571638304-2eeb1a7afbfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <div className={styles.sidebarProfile}>
        <img src="https://avatars.githubusercontent.com/u/42519457?v=4" />
        <strong>Jose Vinicius</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
