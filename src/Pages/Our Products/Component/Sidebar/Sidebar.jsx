import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

export const Sidebar = () => {
  return (
    <div className='product-sidebar'>
        <NavLink to="/electronics" className="product-sidebar-listname">
        Electronics
        </NavLink>
        <NavLink to="/clothing" className="product-sidebar-listname">
        Clothing
        </NavLink>
        <NavLink to="/grocery" className="product-sidebar-listname">
        Grocery
        </NavLink>
        <NavLink to="/stationary" className="product-sidebar-listname">
        Stationary
        </NavLink>
        <NavLink to="/education" className="product-sidebar-listname">
        Education
        </NavLink>
        <NavLink to="/jewellery" className="product-sidebar-listname">
        Jewellery
        </NavLink>
        <NavLink to="/technology" className="product-sidebar-listname">
        Technology
        </NavLink>
    </div>
  )
}
