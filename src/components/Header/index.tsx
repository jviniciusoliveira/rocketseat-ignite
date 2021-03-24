import { SignInButton } from '../SignInButton'
import S from './styles.module.scss'

export function Header() {
  return (
    <header className={S.container}>
      <div className={S.content}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={S.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}