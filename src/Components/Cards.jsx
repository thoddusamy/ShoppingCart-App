import React from 'react'
import { StarFill } from 'react-bootstrap-icons'

function Cards({ handleAddtocart, cartList }) {
  let cardData = [
    {
      id: 1,
      MobName: 'Techno Spark 8T',
      img: 'https://d316acfc88wber.cloudfront.net/global/phones/spark8T/SPARK8T-blue.png',
      buyedCount: '20,556',
      orgPrice: 18999,
      salePrice: 14999,
    },
    {
      id: 2,
      MobName: 'Samsung Ultra 4S',
      img: 'https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-a73/buy/A73_Mint.png',
      buyedCount: '4,52,856',
      orgPrice: 28999,
      salePrice: 25999,
    },
    {
      id: 3,
      MobName: 'Xiaomi 11T 5G',
      img: 'https://crystaltelecom.lk/wp-content/uploads/2021/07/xiaomi_11t_azul_celestial_05_ad_l-1-540x540.jpg',
      buyedCount: '5,27,586',
      orgPrice: 29999,
      salePrice: 27999,
    },
    {
      id: 4,
      MobName: 'Vivo SuperX',
      img: 'https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_Jlm4lxYhvERf17UWdXWrykuptSjJZhWMnMWux9BN.jpg',
      buyedCount: '90,776',
      orgPrice: 14999,
      salePrice: 11599,
    },
    {
      id: 5,
      MobName: 'Techno Camon',
      img: 'https://d316acfc88wber.cloudfront.net/global/phones/camon17pro/in_1.png',
      buyedCount: '1,10,165',
      orgPrice: 15999,
      salePrice: 10999,
    },
    {
      id: 6,
      MobName: 'Samsung XT',
      img: 'https://www.bdprice.com.bd/wp-content/uploads/2022/03/Samsung-Galaxy-M33-Green-Price-in-Bangladesh.jpg',
      buyedCount: '2,56,984',
      orgPrice: 13999,
      salePrice: 9999,
    },
    {
      id: 7,
      MobName: 'IPhone 11',
      img: 'https://store.marvansmobile.com/assets_2/images/demos/demo1/products/12-2.jpg',
      buyedCount: '6,62,821',
      orgPrice: 59999,
      salePrice: 52999,
    },
    {
      id: 8,
      MobName: 'OnePlus 10T',
      img: 'https://cdn.shopify.com/s/files/1/0325/1440/8584/products/OnePlus-10-Pro-5Gaax_1200x1200.jpg?v=1650451146',
      buyedCount: '3,17,354',
      orgPrice: 18999,
      salePrice: 15999,
    },
  ]
  return (
    <>
      {cardData.map((data) => {
        return (
          <div className='col-12 col-lg-4 col-xl-3 col-sm-12 col-md-6 mb-5'>
            <div className='card h-100'>
              {/* <!-- Sale badge--> */}
              <div
                className='badge bg-danger text-white position-absolute'
                style={{ top: '0.5rem', right: '0.5rem' }}
              >
                onSale
              </div>
              {/* <!-- Product image--> */}
              <img className='card-img-top' src={data.img} alt='...' />
              {/* <!-- Product details--> */}
              <div className='card-body p-4'>
                <div className='text-center'>
                  {/* <!-- Product name--> */}
                  <h5 className='fw-bolder'>{data.MobName}</h5>
                  {/* <!-- Product reviews--> */}
                  <div className='d-flex justify-content-center small text-warning mb-2'>
                    <div>
                      <StarFill />
                    </div>
                    <div>
                      <StarFill />
                    </div>
                    <div>
                      <StarFill />
                    </div>
                    <div>
                      <StarFill />
                    </div>
                    <div>
                      <StarFill />
                    </div>
                    <div className='text-dark ms-2'>({data.buyedCount})</div>
                  </div>
                  {/* <!-- Product price--> */}
                  <span className='text-muted me-2 text-decoration-line-through'>
                    ₹ {data.orgPrice}
                  </span>
                  <b>₹ {data.salePrice}</b>
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                <div className='text-center'>
                  <button
                    disabled={cartList.some((obj) => obj.id == data.id)}
                    onClick={() => handleAddtocart(cardData, data.id)}
                    className='btn btn-outline-info mt-auto'
                    href='#'
                  >
                    Add to cart
                  </button>
                  <button className='btn btn-warning mt-auto ms-2' href='#'>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Cards
