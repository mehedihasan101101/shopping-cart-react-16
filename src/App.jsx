
import { useEffect, useState } from 'react'
import './App.css'
import HeroSection from './components/heroSection/heroSection'
import NavBar from './components/nav/nav'
import Productarchive from './components/ProductArchive/productarchive'
import { getStoredCart, setCartLs } from './utilities/localStorage'
import { updateCart } from './utilities/updateCart'


function App() {

  const [allProduct, setAllProduct] = useState([])
  function getAllProduct(data) {
    setAllProduct(data)
  }
  const [cartItems, setCartItems] = useState([])
 


  useEffect(() => {
    const cart = getStoredCart();
    const cartFinalItem =  updateCart(cart,allProduct);
    setCartItems(cartFinalItem);
   
  }, [allProduct])


  function addToCart(item) {
    setCartLs(item.id)
    const cart = getStoredCart();
    const cartFinalItem =  updateCart(cart,allProduct);
    setCartItems(cartFinalItem);
    

  }


  return (
    <>
      <NavBar cartItems={cartItems}></NavBar>
      <HeroSection></HeroSection>
      <h1 className='text-center lg:text-4xl md:text-3xl text-2xl font-bold mt-10'>New Arrivals</h1>
      <Productarchive cartItems ={cartItems} getAllProduct={getAllProduct} addToCart={addToCart}></Productarchive>
    </>
  )
}

export default App
