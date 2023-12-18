import './App.css'
import Form from './components/Form'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
        <Navbar/>
        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/form/:id' element={<Form/>}/>
        </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
