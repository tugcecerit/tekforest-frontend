import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className='nav'>
      <Link to="/" className='link'>
        <div>HOME</div>
      </Link>
      <Link to="/plants" className='link'>
        <div>PLANTS</div>
      </Link>
      <Link to="/about" className='link'>
        <div>ABOUT US</div>
      </Link>
      <Link to="/contact" className='link'>
        <div>CONTACT US</div>
      </Link>
      <Link to="/register" className='link'>
        <div>REGISTER</div>
      </Link>
      <Link to="/signin" className='link'>
        <div>SIGN IN</div>
      </Link>
    </nav>
  );
}

export default Header;
