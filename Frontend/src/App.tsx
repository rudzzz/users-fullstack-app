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
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/form' element={<Form/>}/>
        </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
