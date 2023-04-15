// import { Link } from 'react-router-dom';

// const Header = (props) => {
//   return (
//     <nav className='nav'>
//       <Link to="/" className='link'>
//         <div>HOME</div>
//       </Link>
//       <Link to="/plants" className='link'>
//         <div>PLANTS</div>
//       </Link>
//       <Link to="/categories" className='link'>
//         <div>CATEGORIES</div>
//       </Link>
//       <Link to="/about" className='link'>
//         <div>ABOUT US</div>
//       </Link>
//       <Link to="/contact" className='link'>
//         <div>CONTACT US</div>
//       </Link>
//       <Link to="/register" className='link'>
//         <div>REGISTER</div>
//       </Link>
//       <Link to="/signin" className='link'>
//         <div>SIGN IN</div>
//       </Link>
//     </nav>
//   );
// }

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import PlantCategories from '../pages/PlantCategories';
import PlantCard from './PlantCard';

const Header = (props) => {
  return (
    <Navbar className='nav'>
      <Link to='/' className='nav-link link'>
        <Navbar.Brand>HOME</Navbar.Brand>
      </Link>
      <Navbar.Collapse>
        <Nav>
          <Link to='/plants' className='link'>
            PLANTS
          </Link>
          <NavDropdown title='CATEGORIES' className='category-link'>
            <div className='category-dropdown'>
              <PlantCategories />
            </div>
          </NavDropdown>
          <Link to='/about' className='link'>
            ABOUT US
          </Link>
          <Link to='/contact' className='link'>
            CONTACT US
          </Link>
          <Link to='/register' className='link'>
            REGISTER
          </Link>
          <Link to='/signin' className='link'>
            SIGN IN
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;