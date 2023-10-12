import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Doctors from '../pages/Doctors'
import Contact from '../pages/Contact'
import DoctorDetail from '../pages/DoctorDetail'
import Feedback from '../components/doctors/Feedback'


const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />

            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<Signup />} />
            <Route path='/doctors' element={<Doctors />} />

            <Route path='/contact' element={<Contact />} />

            <Route path='/feedback' element={<Feedback />} />

      
            <Route path='/doctordetail/:id' element={<DoctorDetail />} />

        </Routes>
    </div>
  )
}

export default Router