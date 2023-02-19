import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Products } from './features/products/Products'
import { Cart } from './features/cart/Cart'
import './App.css'
import Form from './pages/Form/Form'
import Navbar from './components/Navigation/Navbar'
import Footer from './components/Footer/Footer'
import Playground from './hooks'
import ThemeContext from './hooks/Context'
import { copyToClip } from './util/copyToClipboard'
import ReactPerformance from './pages/ReactPerformance'
import Intro from './pages/Intro'
function AppRoutes() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/products'
        element={<Products />}
      />

      <Route
        path='/signin'
        element={<Form />}
      />
      <Route
        path='/cart'
        element={<Cart />}
      />
      <Route
        path='/hooks'
        element={<Playground />}
      />
    </Routes>
  )
}
function App() {
  const { style } = useContext(ThemeContext)
  const bg = style?.background === '#fff' ? '#fff' : '#0f172a'
  return (
    <div style={{ background: '' }}>
      {/* <Navbar />
      <Intro />
      <AppRoutes /> */}

      <ReactPerformance />
    </div>
  )
}

export default App

function Home() {
  return (
    <>
      <main className='page'>
        <h1>Welcome to the Store</h1>
        <figure>
          <img
            src='/store.jpg'
            alt='A large old storefront'
            width='800'
          />
          <figcaption>Gary Houston, CC0, via Wikimedia Commons</figcaption>
        </figure>
      </main>
      <Footer />
    </>
  )
}
