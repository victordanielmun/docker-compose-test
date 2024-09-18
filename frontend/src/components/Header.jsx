import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <Link to={'/products'}>
            <li><a>Productos</a></li>
            </Link>
            <Link to={'/about'}>
            <li><a>Acerca de Nosotros</a></li>
            </Link>
            <Link to={'/register'}>
            <li><a>Registrate</a></li>
            </Link>
          </ul>
        </div>
        <Link to={'/'}>
        <div className='flex flex-col'>
          <a className="text-xl ">Artesanias de</a>
          <a className="text-xl ">nuestra tierra</a>
        </div>
        </Link>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-center items-center">
          <Link to={'/products'}>
          <li className='h-full'><a>Productos</a></li>
          </Link>
          <div className="form-control mx-4 p-0">
            <input type="text" placeholder="Buscar" className="input input-bordered w-24 md:w-auto" />
          </div>
          <Link to={'/register'}>
          <li><a>Registrate</a></li>
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={'/login'}>
        <a className="btn">Iniciar Sesion</a>
        </Link>
      </div>
    </div>
  )
}

Header.propTypes = {

}

export default Header
