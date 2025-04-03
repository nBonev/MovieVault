import { Link } from "react-router-dom";
import "../css/NavBar.css"

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">MovieVault</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
                <Link to="/register" className="nav-link">Register</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/logout" className="nav-link">Logout</Link>
            </div>
        </nav>
    )
}