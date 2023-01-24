import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './comment.module.css'

export function Comment() {
  return (
    <div className={styles.commentContainer}>
      <Avatar
        hasBorder={false}
        src="https://github.com/jviniciusoliveira.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commentAuthorAndTime}>
              <strong>Jose Vinicius</strong>
              <time title="20 de Janeiro às 8h" dateTime="2023-01-20 08:00:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
