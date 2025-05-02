
import './App.css'
import HeroSection from './components/heroSection/heroSection'
import NavBar from './components/nav/nav'
import Productarchive from './components/ProductArchive/productarchive'
function App() {


  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <h1 className='text-center lg:text-4xl md:text-3xl text-2xl font-bold mt-10'>New Arrivals</h1>
      <Productarchive></Productarchive>
    </>
  )
}

export default App
