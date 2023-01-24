import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './post.module.css'

export function Post() {
  return (
    <article className={styles.postContainer}>
      <header>
        <div className={styles.postAuthor}>
          <Avatar src="https://github.com/jviniciusoliveira.png" />
          <div className={styles.postAuthorInfo}>
            <strong>Jose Vinicius</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="20 de Janeiro às 8h" dateTime="2023-01-20 08:00:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.postContent}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉&nbsp;<a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a>&nbsp;
          <a href="">#nlw</a>&nbsp;
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.postCommentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.postCommentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
