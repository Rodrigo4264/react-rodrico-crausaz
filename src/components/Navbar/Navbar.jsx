import React from 'react'
import './navbar.css'
import CartWidget from '../Cartwidget/Cartwidget'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='navbar navbar-expand-lg'>

  <div className='container-fluid'>

    <NavLink className='navbar-brand' to='/'>FOX OPTICAL</NavLink>
    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarNavDropdown'>

      <ul className='navbar-nav'>

        <li className='nav-item'>
          <NavLink className='nav-link' to='/sol'>Sol</NavLink>
        </li>

        <li className='nav-item'>
          <NavLink className='nav-link' to='/receta'>Receta</NavLink>
        </li>

        <li className='nav-item'>
          <NavLink className='nav-link' to='/contacto'>Lente de contacto</NavLink>
        </li>

      </ul>
    </div>
  </div>
  <CartWidget/>
</nav>
<hr/>
    </>
  )
}

export default Navbar