// Navbar.js
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
    </nav>
  );
}

export default Navbar;
