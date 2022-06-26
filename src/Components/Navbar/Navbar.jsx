import React from 'react'
import CartBtn from './CartBtn'
import NavbarLi from './NavbarLi'
import { PhoneVibrateFill } from 'react-bootstrap-icons'

function Navbar({ length }) {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-dark'>
      <div className='container px-4 px-lg-5'>
        <a className='navbar-brand text-white' href='#!'>
          <PhoneVibrateFill /> MobFi
        </a>
        <div className='navbar-collapse'>
          <NavbarLi />
          <CartBtn length={length} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
