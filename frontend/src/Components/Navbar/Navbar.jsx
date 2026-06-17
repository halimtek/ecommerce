import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

export const Navbar = () => {

  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>

      {/* LOGO */}
      <div className="nav-logo">
        <img src={logo} alt="Halim Tech Logo" />
      </div>

      {/* MOBILE DROPDOWN */}
      <img
        className='nav-dropdown'
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt="menu"
      />

      {/* MENU */}
      <ul ref={menuRef} className="nav-menu">

        <li onClick={() => setMenu('shop')}>
          <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
          {menu === "shop" ? <hr /> : null}
        </li>

        <li onClick={() => setMenu("laptops")}>
          <Link style={{ textDecoration: 'none' }} to='/laptops'>Laptops</Link>
          {menu === "laptops" ? <hr /> : null}
        </li>

        <li onClick={() => setMenu("desktops")}>
          <Link style={{ textDecoration: 'none' }} to='/desktops'>Desktops</Link>
          {menu === "desktops" ? <hr /> : null}
        </li>

        <li onClick={() => setMenu("accessories")}>
          <Link style={{ textDecoration: 'none' }} to='/accessories'>Accessories</Link>
          {menu === "accessories" ? <hr /> : null}
        </li>

        <li onClick={() => setMenu("monitors")}>
          <Link style={{ textDecoration: 'none' }} to='/monitors'>Monitors</Link>
          {menu === "monitors" ? <hr /> : null}
        </li>

        <li onClick={() => setMenu("tablets")}>
          <Link style={{ textDecoration: 'none' }} to='/tablets'>Tablets</Link>
          {menu === "tablets" ? <hr /> : null}
        </li>

      </ul>

      {/* LOGIN + CART */}
      <div className="nav-login-cart">

        {localStorage.getItem('auth-token')
          ? <button onClick={() => {
              localStorage.removeItem('auth-token');
              window.location.replace('/');
            }}>
              Logout
            </button>
          : <Link to='/login'><button>Login</button></Link>
        }

        <Link to='/cart'>
          <img src={cart_icon} alt="cart" />
        </Link>

        <div className='nav-cart-count'>
          {getTotalCartItems()}
        </div>

      </div>

    </div>
  )
}