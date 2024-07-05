import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'animate.css'
import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {  BrowserRouter, Route , Routes} from "react-router-dom"
import { Browse } from './Components/Browse'
import { Error } from './__utils/Error'
import {My_Profile} from '../src/Components/My_Profile'
import { Card } from './Components/Card'
import { WatchAnime } from './Components/WatchAnime'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
             <BrowserRouter>
           <Routes>
             <Route index element={<Browse/>}/>
             <Route path='/Browse' element={<Browse/>}/>
             <Route path='/My_Profile' element={<My_Profile/>}/>
             <Route path='/Animés' element={<Card/>}/>
             <Route path='/Watch' element={<WatchAnime/>}/>
             <Route path='*' element={<Error/>}/>
           </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

