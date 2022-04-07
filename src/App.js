import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/login/Login'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Home />
        <Footer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login/*' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
