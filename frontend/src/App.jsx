import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import AddPlace from './Pages/AddPlace'
import UpdatePlace from './Pages/UpdatePlace'
import Dashboard from './Pages/Dashboard'
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'
import Login from './components/Login/Login'

function App() {
  return (
    <>
      <>
        <Navbar />
      </>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/addplace' element={<AddPlace />} />
        <Route path='/updateplace' element={<UpdatePlace />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
