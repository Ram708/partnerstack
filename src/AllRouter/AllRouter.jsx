import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { Whatwedo } from '../Pages/What We Do/Whatwedo'
import { Ourproducts } from '../Pages/Our Products/Ourproducts'
import { Electronics } from '../Pages/Our Products/Component/Electronics/Electronics'
import { Clothing } from '../Pages/Our Products/Component/Clothing/Clothing'
import { Grocery } from '../Pages/Our Products/Component/Grocery/Grocery'
import { Stationary } from '../Pages/Our Products/Component/Stationary/Stationary'
import { Education } from '../Pages/Our Products/Component/Education/Education'
import { Jewellery } from '../Pages/Our Products/Component/Jewellery/Jewellery'
import { Technology } from '../Pages/Our Products/Component/Technology/Technology'
import {  Partners} from '../Pages/Partners/Partners'
import Blog from '../Pages/Blog/Blog'
import Adsmarket from '../Pages/Ads Market/Adsmarket'
import { Auction } from '../Component/Topbar/Auction/Auction'



export const AllRouter = () => {
  return (
   
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/whatwedo' element={<Whatwedo/>}/>
            <Route path='/ourproducts' element={<Ourproducts/>}/>
            <Route path='/electronics' element={<Electronics/>}/>
            <Route path='/clothing' element={<Clothing/>}/>
            <Route path='/grocery' element={<Grocery/>}/>
            <Route path='/stationary' element={<Stationary/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path='/jewellery' element={<Jewellery/>}/>
            <Route path='/technology' element={<Technology/>}/>

            <Route path='/partners' element={<Partners/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/adsmarket' element={<Adsmarket/>}/>
            <Route path='/auction' element={<Auction/>}/>            
        </Routes>
        
   
  )
}
