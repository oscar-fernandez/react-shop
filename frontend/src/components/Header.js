import React from 'react'

const Header = () => {
  return (
    <header id='Header'>
      <nav className='navbar'>
        <div className='container'>
          <a className='navbar__brand' href='/'>
            React-Shop
          </a>
          <div className='navbar__group--right'>
            <a href='/login'>
              <i className='fas fa-user'></i> Sign In
            </a>
            <a href='/cart'>
              <i className='fas fa-shopping-cart'></i> Cart
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
