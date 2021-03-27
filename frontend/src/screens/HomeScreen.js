import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from '../components/Product'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div id='HomeScreen'>
      <div className='container'>
        <h1 className='screen__title'>Latest Products</h1>
        <div className='screen__grid'>
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
