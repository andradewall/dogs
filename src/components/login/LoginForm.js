import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from './../forms/Input'
import Button from './../forms/Button'
import useForm from '../../hooks/useForm'
import { TOKEN_POST, USER_GET } from '../../api'
import { UserContext } from '../../UserContext'
import Error from '../../helpers/Error'
import styles from '../../css/LoginForm.module.css'
import stylesButton from '../../css/Button.module.css'

const LoginForm = () => {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const username = useForm()
  const password = useForm()

  const { userLogin, error, loading } = useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Log in</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input type='text' name='username' label='User' {...username} />
        <Input type='password' name='password' label='Password' {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Log in</Button>
        )}
        <Error error={error} />
        <Link className={styles.lost} to='/login/lost-password'>
          Lost your password?
        </Link>
      </form>
      <div className={styles.signup}>
        <h2 className={styles.subtitle}>Sign up</h2>
        <p>Create your account to show the world your pet!</p>
        <Link className={stylesButton.button} to='/login/signup'>
          Sign up
        </Link>
      </div>
    </section>
  )
}

export default LoginForm
