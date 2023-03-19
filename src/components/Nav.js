import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <nav class="bg-primary-secondary text-primary-Git py-10 px-12 flex items-center justify-between">

      <div class="flex items-center mx-32">
        <span class=" text-2xl font-bold ">Limper Lemon</span>
      </div>
      <div class="flex items-center mx-32 ">
        <Link className='mr-12 font-bold outline-dashed outline-offset-8 hover:text-primary-darktext ' to="/">Home</Link>
        <Link className='font-bold outline-dashed outline-offset-8 hover:text-primary-darktext' to="/Cart">Cart</Link>
      </div>
</nav>
  );
};

export default Nav;
          