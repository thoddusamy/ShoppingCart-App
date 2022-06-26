import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from './Components/Navbar/CartPage'
import MainPage from './Components/MainPage'
import React, { useState } from 'react'

function App() {
  const [cartList, setCartList] = useState([])
  const [total, setTotal] = useState(0)
  const [length, setLength] = useState(0)

  let handleAddtocart = (cardData, id) => {
    let findIndex = cardData.findIndex((obj) => obj.id == id)
    let gotIndex = cardData[findIndex]
    setTotal(total + gotIndex.salePrice)
    setCartList([...cartList, gotIndex])
    setLength(cartList.length + 1)
  }

  let RemoveCartItem = (id) => {
    let removeFindIndex = cartList.findIndex((obj) => obj.id == id)
    setTotal(total - cartList[removeFindIndex].salePrice)
    cartList.splice(removeFindIndex, 1)
    setCartList([...cartList])
    setLength(cartList.length)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/cart'
          element={
            <CartPage
              cartList={cartList}
              total={total}
              RemoveCartItem={RemoveCartItem}
            />
          }
        />
        <Route
          path='/'
          element={
            <MainPage
              handleAddtocart={handleAddtocart}
              length={length}
              cartList={cartList}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
