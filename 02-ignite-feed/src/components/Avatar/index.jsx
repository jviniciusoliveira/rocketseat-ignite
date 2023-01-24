import styles from './avatar.module.css'

export function Avatar({ src, hasBorder = true }) {
  const css = hasBorder ? styles.avatarWithBorder : styles.avatar

  return <img className={css} src={src} />
}
