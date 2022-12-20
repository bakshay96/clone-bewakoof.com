import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Components/home'
import LandingPageAcc from '../Components/LandingPageAcc'
import LandingPageWomen from '../Components/LandingPageWomen'
import Login from '../Components/Login/login'
import MenProducts from '../Components/Products/MensProducts/MenProducts'

import WomenProducts from '../Components/Products/WomensProducts/WomenProducts'
import PrivateRoute from '../Routes/privateRoutes'
import notFound from '../Components/notFound'




const AllRoutes = () => {


  return (
    <div>

        <Routes>
          
            <Route path='/' element={<Home />} />
            <Route path='/landingPage/women' element={<LandingPageWomen />} />
            <Route path='/landingPage/accessories' element={<LandingPageAcc />} />

            <Route path='/men-clothing' 
            element={ <PrivateRoute> <MenProducts /> </PrivateRoute> } />

            <Route path='/women-clothing' 
            element={ <PrivateRoute> <WomenProducts/></PrivateRoute> } />

            <Route path='/mobile-covers-india' 
            element={ <PrivateRoute> <h1>MEN PAGE</h1> </PrivateRoute> } />

            <Route path='/products/:id' element={

            <PrivateRoute>  <SingleProductPage /> </PrivateRoute>
            
            } />

            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<h1>REGISTER PAGE</h1>} />

           

            {/* <Route path='/wishlist' 
           
           
          
             <Route path='/*' element={<notFound />} />
        </Routes>
      
    </div>
  )
}

export default AllRoutes
