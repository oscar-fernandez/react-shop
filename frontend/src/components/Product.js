import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <div id='Product'>
      <div className='card'>
        <div className='card__container'>
          <Link to={`/product/${product._id}`} className='card__link--top'>
            <img className='card__img' src={product.image} />
          </Link>
          <Link to={`/product/${product._id}`} className='card__text--h3'>
            {product.name}
          </Link>
          <div className='card__text--div'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
          <h3 className='card__text--h3 price'>${product.price}</h3>
        </div>
      </div>
    </div>
  )
}

export default Product
