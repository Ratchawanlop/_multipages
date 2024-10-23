import { HashRouter, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'

import Layout from './Layout/Layout/Layout'
import Home from './Page/Home/Home'
import Todo from './Page/Todo/Todo'
import Calculator from './Page/Calculator/Calculator'
import BallAnimation from './Page/Animation/Animation'
import Component from './Page/Component/Component'
import Products from './Page/Products/Products'
import Carts from './Page/Carts/Carts'
import Login from './Page/Login/Login'

import { fecthProducts } from './DATA/Products'
//HashRouter, BrowserRouter
//localhost:5173/#/<path>
function App() {
  const [token, setToken] = useState('')
  const [role, setRole] = useState('')

  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  const [tab, setTab] = useState('home')

  useEffect(() => {
    setProducts(fecthProducts())
  }, [])
  useEffect(() => {
    console.log(products)
  })

  if (token === '') {
    return <Login setToken={setToken} setRole={setRole} />
  } else {
    return (
      <div className='App-container'>
        <HashRouter>
          <Routes>
            <Route
              element={
                <Layout
                  tab={tab}
                  setTab={setTab}
                  products={products}
                  carts={carts}
                  setToken={setToken}
                />
              }
            >
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/component' element={<Component />} />
              <Route path='/calculator' element={<Calculator />} />
              <Route path='/animation' element={<BallAnimation />} />
              <Route path='/todo' element={<Todo />} />
              <Route
                path='/products'
                element={
                  <Products
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                  />
                }
              />
              <Route
                path='/carts'
                element={<Carts carts={carts} setCarts={setCarts} />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    )
  }
}

export default App
