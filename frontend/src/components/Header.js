import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header id='Header'>
      <nav className='navbar'>
        <div className='container'>
          <Link className='navbar__brand' to='/'>
            React-Shop
          </Link>
          <div className='navbar__group--right'>
            <Link to='/login'>
              <i className='fas fa-user'></i> Sign In
            </Link>
            <Link to='/cart'>
              <i className='fas fa-shopping-cart'></i> Cart
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
