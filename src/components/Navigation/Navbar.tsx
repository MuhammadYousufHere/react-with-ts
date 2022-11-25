import React from 'react';
import { Link } from 'react-router-dom';
import { CartLink } from '../../features/cart/CartLink';
interface Props {}
const Navbar = () => {
  return (
    <div>
      <div className={`app`}>
        <header className={'header'}>
          <nav>
            <Link
              className={'navLink'}
              to='/'
            >
              Home
            </Link>
            <Link
              className={'navLink'}
              to='/products'
            >
              Products
            </Link>
            <Link
              className={'navLink'}
              to='/hooks'
            >
              Hooks
            </Link>
            <Link
              className={'navLink'}
              to='/signin'
            >
              Signin
            </Link>
            <CartLink />
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
