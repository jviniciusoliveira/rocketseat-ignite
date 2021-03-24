import S from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={S.container}>
      <FaGithub color="#04d361" />
      José Vinicius
      <FiX color="#737380" className={S.closeIcon} />
    </button>
  ) : (
    <button type="button" className={S.container}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}