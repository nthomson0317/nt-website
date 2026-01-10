import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Nicholas Thomson
      </Link>
      <div className="nav-links">
        <Link to="/paintings">Paintings | </Link>
        <Link to="/drawings">Drawings | </Link>
        <Link to="/covers">Covers | </Link>
        <Link to="/press">Press </Link>
      </div>
    </nav>
  );
}
