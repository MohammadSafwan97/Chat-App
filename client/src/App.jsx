import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import bgImage from "./assets/bgImage.svg";
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
const App = () => {
  return (
   <div
      className="bg-contain"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
this is an app
<Routes>
  <Route path='/' element={<HomePage/>} />
   <Route path='/login' element={<LoginPage/>} />
   <Route path='/profile' element={<ProfilePage/>} />
  
</Routes>
   </div>
  )
}

export default App