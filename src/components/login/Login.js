import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginSignup from './LoginSignup'
import LoginLostPassword from './LoginLostPassword'
import LoginResetPassword from './LoginResetPassword'

const Login = () => {
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
