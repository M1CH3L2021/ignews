import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const isUserLoggedIn = true

  return isUserLoggedIn ? (
    <button
      type="button"
      className={styles.signin_button}
    >
      <FaGithub fill="#04d361" />
      Michel Carvalho
      <FiX fill="#737380" className={styles.close_icon}/>
    </button>
  ) : (
    <button
      type="button"
      className={styles.signin_button}
    >
      <FaGithub fill="#eba417" />
      Sign in withGithub
    </button>
  )

  return 
}