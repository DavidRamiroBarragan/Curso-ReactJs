import React from 'react';
import Link from 'next/link';

const Navegacion = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a>Inicio</a>
        </Link>
      </li>
      <li>
        <Link href='/nosotros'>
          <a>Nosotros</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      ul {
        background-color: #333;
        list-style: none;
        display: flex;
      }
      ul li {
        padding: 0.5rem;
      }
      ul li a {
        font-size: 1.2rem;
        color: white;
        text-decoration: none;
      }
    `}</style>
  </nav>
);

export default Navegacion;
