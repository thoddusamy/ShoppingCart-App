import React from 'react'

function Header() {
  return (
    <header className='bg-warning py-1'>
      <div className='container px-4 px-lg-5 my-5'>
        <div className='text-center text-dark'>
          <h1 className='display-4 fw-bolder'>Welcome to MobFi.com</h1>
          <p className='lead font-style fw-normal text-secondary-50 mb-0'>
            Buy your Favourite Mobiles with amazing price offers!
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
