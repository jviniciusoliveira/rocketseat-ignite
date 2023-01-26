import * as DateFns from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './post.module.css'

const contentTypes = {
  paragraph: (text, key) => <p key={key}>{text}</p>,
  link: (text, key) => (
    <p key={key}>
      <a href="">{text}</a>
    </p>
  ),
}

export function Post({ author, content, publishedAt }) {
  const publishedDateFormatted = DateFns.format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  )

  const publishedDateRelativeToNow = DateFns.formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article className={styles.postContainer}>
      <header>
        <div className={styles.postAuthor}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.postAuthorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.postContent}>
        {content.map((line, i) => {
          const lineContent = contentTypes[line.type]
          return lineContent(line.text, `${line.type}-${i}`)
        })}
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
