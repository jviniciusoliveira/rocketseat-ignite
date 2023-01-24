import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.appContainer}>
        <Sidebar />
        <main>
          <p>Post 01</p>
          <p>Post 02</p>
        </main>
      </div>
    </div>
  )
}
