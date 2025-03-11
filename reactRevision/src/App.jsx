import { useState } from 'react'
import Product from "./components/Product.jsx"
import Button from './components/Button.jsx';
import Form from './components/Form.jsx';
function App() {
  let features = ["Hi-Tech", "Durable", "Fast"];
  // let features = [<li>"Hi-Tech"</li>, <li>"Durable"</li>, <li>"Fast"</li>];
  let features2 = {
    a: "Hi-tech",
    b: "fast"
  }
  return (
    <>
      <Product title="laptop" price={10000} features={features} />
      <Product title="Smartphone" price={50000} features2={features2} />
      <Product features={["hi-tech", "fast"]} />
      <Product features2={{ a: "hi-tech", b: "fast" }} />
      <Button/>
      <Form/>
    </>
  )
}

export default App
