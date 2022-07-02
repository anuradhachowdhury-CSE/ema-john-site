import React from 'react'
import '../Header/Header.css'
import logo from '../../images/logo.png'



const Header = () => {
  return (
    <div className='header'>
        <h2>Hello Friends</h2>
       <img src={logo} alt=".." />
       <nav className='head'>
        <a href="/home">Home</a>
        <a href="/shop">Shop</a>
        <a href="/order">Order Review</a>
        <a href="/manage">Manage Inventory here</a>
       </nav>
       {/* <nav className='input-style'>
        <input type="text" placeholder='type here to search' />
        <FontAwesomeIcon icon={faShoppingCart} />
       </nav> */}
    </div>
  )
}

export default Header