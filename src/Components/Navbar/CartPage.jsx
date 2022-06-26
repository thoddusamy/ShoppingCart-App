import React from 'react'

function CartPage({ cartList, total, RemoveCartItem }) {
  return (
    <div className='container bg-warning'>
      <div className='heading text-center'>
        <h1 className='py-2'>My Cart</h1>
        <div className='row bg-color'>
          {cartList.map((item) => {
            return (
              <div className='col-12 col-lg-4 col-xl-3 col-sm-12 col-md-6 mt-5'>
                <div className='card h-100'>
                  {/* <!-- Product image--> */}
                  <img className='card-img-top' src={item.img} alt='...' />
                  {/* <!-- Product details--> */}
                  <div className='card-body p-4'>
                    <div className='text-center'>
                      {/* <!-- Product name--> */}
                      <h5 className='fw-bolder'>{item.MobName}</h5>
                      {/* <!-- Product reviews--> */}
                      {/* <!-- Product price--> */}
                      <span className='text-muted me-2 text-decoration-line-through'>
                        ₹ {item.orgPrice}
                      </span>
                      <b>₹ {item.salePrice}</b>
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                    <div className='text-center'>
                      <button className='btn btn-warning mt-auto ms-2' href='#'>
                        Place Order
                      </button>
                      <button
                        onClick={() => RemoveCartItem(item.id)}
                        className='btn btn-danger mt-auto ms-2'
                        href='#'
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <h1 className='text-end py-2'>Total: ₹{total}</h1>
      </div>
    </div>
  )
}

export default CartPage
