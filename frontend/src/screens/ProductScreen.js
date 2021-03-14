import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id)
  return (
    <div id='ProductScreen'>
      <div className='container'>
        <Link className='btn btn-light' to='/'>
          Go Back
        </Link>
        <div className='ProductScreen__grid my-1'>
          <div className='ProductScreen__grid--left'>
            <img src={product.image} alt={product.name} />
          </div>
          <div className='ProductScreen__grid--middle'>
            <div className='info'>
              <div className='info__item'>
                <h3 className='info__item--name'>{product.name}</h3>
              </div>
              <div className='info__item'>
                <div className='info__item--rating ml-1'>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  ></Rating>
                </div>
              </div>
              <div className='info__item'>
                <p className='info__item--price ml-1'>${product.price}</p>
              </div>
              <div className='info__item'>
                <p className='info__item--text'>{product.description}</p>
              </div>
            </div>
          </div>
          <div className='ProductScreen__grid--right'>
            <div className='sidebar'>
              <div className='sidebar__item'>
                <p className='sidebar__item--price'>Price:</p>
                <p className='sidebar__item--price'>${product.price}</p>
              </div>
              <div className='sidebar__item'>
                <p className='sidebar__item--status'>Status:</p>
                <p className='sidebar__item--status'>
                  {product.countInStock > 0
                    ? `${product.countInStock} in stock`
                    : 'Out of stock'}
                </p>
              </div>
              <div className='sidebar__item'>
                <button
                  className='btn btn-dark'
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen
