import { useState } from 'react'
import './App.css'
import Nav from "./components/Nav";

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import  Add  from './components/Add';
;
;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Nav />
       <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Add' element={<Add />}></Route>
       </Routes>
       
    </>
  )
}

export default App
