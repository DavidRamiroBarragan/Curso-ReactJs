import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <nav className='navbar navbar-light'>
        <span className='navbar-brand mb-0 h1'>
          Administrador de Biblioteca
        </span>
      </nav>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarColor02'
        aria-controls='navbarColor02'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarColor02'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to={'/suscriptores'}>
              Suscriptores
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to={'/suscriptores'}>
              Libros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
