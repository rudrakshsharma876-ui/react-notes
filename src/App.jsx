import React from 'react'
import ProductCard, { Greet } from "./call.jsx";

function App() {
  return (
    <div>
      <h1>Hi, Harsshwadhan</h1>

      <ProductCard title="Wireless Headphones" price={99} />
      <ProductCard title="Mechanical Keyboard" price={149} />
      <ProductCard title="Ergonomic Mouse" price={45} />

      <Greet name="Harsshwardhan Chowdhary" squad={168} />
      <Greet name="Naman" squad={169} />
    </div>
  )
}

export default App