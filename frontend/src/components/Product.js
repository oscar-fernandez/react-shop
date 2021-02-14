import React from 'react'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <div id='Product'>
      <div className='card'>
        <div className='card__container'>
          <a href={`/product/${product._id}`} className='card__link--top'>
            <img className='card__img' src={product.image} />
          </a>
          <h3 className='card__text--h3'>{product.name}</h3>
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
