import React from 'react'

function NavbarLi() {
  let liData = ['Home', 'About', 'Shop']
  return (
    <ul className='navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4'>
      {liData.map((liItem) => {
        return (
          <li className='nav-item'>
            <a
              className='nav-link text-white active'
              aria-current='page'
              href='#!'
            >
              {liItem}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default NavbarLi
