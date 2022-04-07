import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from './../forms/Input'
import Button from './../forms/Button'
import useForm from '../../hooks/useForm'

const LoginForm = () => {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const username = useForm()
  const password = useForm()

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        //  username, password
      }),
    })
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((json) => {
        console.log(json)
      })
  }

  return (
    <section>
      <h1>Log in</h1>
      <form action='' onSubmit={handleSubmit}>
        <Input type='text' name='username' label='User' {...username} />
        <Input type='password' name='password' label='Password' {...password} />
        <Button>Log in</Button>
      </form>
      <Link to='/login/signup'>Sign up</Link>
    </section>
  )
}

export default LoginForm
