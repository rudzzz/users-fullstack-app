import './App.css'
import Form from './components/Form'
import Home from './components/Home'
import List from './components/List'
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
            <Route path='/list/:id' element={<List/>}/>
        </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
