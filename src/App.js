import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/login/Login'
import Footer from './components/Footer'
import { UserStorage } from './UserContext'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Home />
          <Footer />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login/*' element={<Login />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
