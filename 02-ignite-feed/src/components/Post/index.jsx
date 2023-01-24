import styles from './post.module.css'

export function Post() {
  return (
    <article className={styles.postContainer}>
      <header>
        <div className={styles.postAuthor}>
          <img
            className={styles.postAuthorAvatar}
            src="https://github.com/jviniciusoliveira.png"
            alt=""
          />
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
    </article>
  )
}
