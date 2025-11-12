import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Products from './components/Products'

function App() {
  const products = [
    { title: 'Aurora Desk Lamp', piece: '1 piece', price: '$68.00' },
    { title: 'Midnight Mug', piece: '2 pieces', price: '$24.00' },
    { title: 'Cozy Knit Throw', piece: '1 piece', price: '$89.00' },
    { title: 'Oak Aroma Candle', piece: '3 pieces', price: '$36.00' },
  ]

  return (
    <div className="page">
      <header className="hero" id="home">
        <Navbar />
        <div className="hero-text">
          <h1>Curated Finds for Everyday Living</h1>
          <p>Thoughtfully designed pieces to elevate your space and routine.</p>
          <a className="cta" href="#products">
            Explore Products
          </a>
        </div>
      </header>

      <main>
        <About />
        <Products items={products} />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} LuxeLane. All rights reserved.
      </footer>
    </div>
  )
}

export default App
