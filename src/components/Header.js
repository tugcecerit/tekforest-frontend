import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import PlantCategories from '../pages/PlantCategories';
import './Header.css';

const Header = (props) => {
  return (
    <Navbar className='nav'>
      <Link to='/' className='nav-link link'>
        <Navbar.Brand><img className='logo' src="/logo4.png"></img></Navbar.Brand>
      </Link>
      <Navbar.Collapse>
        <Nav>
          <div className='link-container'>
            <div className='dropdown'>
              <NavDropdown title={<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg> CATEGORIES</span>} className='category-link'>
                <div className='category-dropdown'>
                  <PlantCategories />
                </div>
              </NavDropdown>
            </div>
            <div className='other-links'>
              <Link to='/plants' className='link'>
                PLANTS
              </Link>
              <Link to='/userPlants' className='link'>
                MY PLANTS
              </Link>
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
            </div>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;