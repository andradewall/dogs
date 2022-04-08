import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from './../forms/Input'
import Button from './../forms/Button'
import useForm from '../../hooks/useForm'
import { TOKEN_POST, USER_GET } from '../../api'
import { UserContext } from '../../UserContext'

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
    <section>
      <h1>Log in</h1>
      <form action='' onSubmit={handleSubmit}>
        <Input type='text' name='username' label='User' {...username} />
        <Input type='password' name='password' label='Password' {...password} />
        {loading ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button>Log in</Button>
        )}
        {error && <p>{error}</p>}
      </form>
      <Link to='/login/signup'>Sign up</Link>
    </section>
  )
}

export default LoginForm
