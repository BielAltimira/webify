import ButtonGradient from './assets/svg/ButtonGradient'
import Collaboration from './components/Collaboration'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'

function App() {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden '>
        <Header/>
        <Hero/>
        <Collaboration/>
        <Pricing/>
        <Contact/>
        <Footer/>
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
