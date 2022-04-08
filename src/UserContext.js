import React, { createContext, useCallback, useEffect, useState } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null)
  const [isLogged, setIsLogged] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const userLogout = useCallback(async () => {
    setData(null)
    setError(null)
    setLoading(false)
    setIsLogged(false)
    window.localStorage.removeItem('token')
    navigate('/login')
  }, [navigate])

  const getUser = async (token) => {
    const { url, options } = USER_GET(token)
    const userRes = await fetch(url, options)
    const json = await userRes.json()
    setData(json)
    setIsLogged(true)
    console.log('🚀 ~ file: UserContext.js ~ line 47 ~ getUser ~ json', json)
  }

  const userLogin = async (username, password) => {
    try {
      setError(null)
      setLoading(true)

      console.log(`Username: ${username} | Password: ${password}`)

      const { url, options } = TOKEN_POST({ username, password })
      const tokenRes = await fetch(url, options)
      console.log(
        '🚀 ~ file: UserContext.js ~ line 57 ~ userLogin ~ tokenRes',
        tokenRes
      )

      if (!tokenRes.ok) throw new Error(`Error: User invalid`)

      const { token } = await tokenRes.json()
      window.localStorage.setItem('token', token)
      await getUser(token)
      navigate('/account')
    } catch (err) {
      console.log(err)
      setError(err.message)
      setIsLogged(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token')
      if (token) {
        try {
          setError(null)
          setLoading(true)

          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          console.log(
            '🚀 ~ file: UserContext.js ~ line 22 ~ autoLogin ~ response',
            response
          )

          if (!response.ok) throw new Error('Token is invalid')

          await getUser(token)
        } catch (err) {
          console.log(err)
          userLogout()
        } finally {
          setLoading(false)
        }
      }
    }
    autoLogin()
  }, [userLogout])

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, isLogged }}
    >
      {children}
    </UserContext.Provider>
  )
}
