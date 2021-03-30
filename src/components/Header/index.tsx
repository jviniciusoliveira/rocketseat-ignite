import { SignInButton } from '../SignInButton'
import { ActiveLink } from '../ActiveLink'
import S from './styles.module.scss'

export function Header() {
  return (
    <header className={S.container}>
      <div className={S.content}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={S.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={S.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}