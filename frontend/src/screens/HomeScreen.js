import React from 'react'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
  return (
    <div id='HomeScreen'>
      <div className='container'>
        <h1 className='screen__title'>Latest Products</h1>
        <div className='screen__grid'>
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
