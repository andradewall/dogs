import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginSignup from './LoginSignup'
import LoginLostPassword from './LoginLostPassword'
import LoginResetPassword from './LoginResetPassword'
import { UserContext } from '../../UserContext'

const Login = () => {
  const { isLogged } = useContext(UserContext)

  if (isLogged === true) return <Navigate to='/account' />
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='signup' element={<LoginSignup />} />
        <Route path='lost-password' element={<LoginLostPassword />} />
        <Route path='reset-password' element={<LoginResetPassword />} />
      </Routes>
    </div>
  )
}

export default Login
