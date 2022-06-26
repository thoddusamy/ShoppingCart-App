import Navbar from './Navbar/Navbar'
import Header from './Header'
import Cards from './Cards'

function MainPage({ handleAddtocart, length, cartList }) {
  return (
    <div className='container-fluid'>
      <Navbar length={length} />
      <Header />
      <div className='container px-4 px-lg-5 mt-5'>
        <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
          <Cards handleAddtocart={handleAddtocart} cartList={cartList} />
        </div>
      </div>
      <footer class='py-3 bg-dark'>
        <div class='container'>
          <p class='m-0 text-center text-white'>
            Copyright &copy; MobFi.com (2022)
          </p>
        </div>
      </footer>
    </div>
  )
}

export default MainPage
