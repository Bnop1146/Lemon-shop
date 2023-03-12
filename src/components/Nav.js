import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='text-black font-bold'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;