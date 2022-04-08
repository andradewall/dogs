import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/Header.module.css'
import { ReactComponent as Dogs } from './../assets/dogs.svg'
import { UserContext } from '../UserContext'

const Header = () => {
  const { data, userLogout } = useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {data ? (
          <>
            <Link className={styles.login} to='/account'>
              {data.nome}
            </Link>
            <button onClick={userLogout}>Log out</button>
          </>
        ) : (
          <Link className={styles.login} to='/login'>
            Log in / Sign up
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
