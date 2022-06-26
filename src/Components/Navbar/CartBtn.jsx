import React from 'react'
import { CartFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function CartBtn({ length }) {
  return (
    <form className='d-flex navbar-flexs'>
      <Link to='/cart' className='btn text-white' type='submit'>
        <CartFill className='me-1' />
        Cart
        <span className='badge bg-danger text-white ms-1 rounded-pill'>
          {length}
        </span>
      </Link>
    </form>
  )
}

export default CartBtn
