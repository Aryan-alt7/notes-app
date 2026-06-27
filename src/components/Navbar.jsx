import './Navbar.css'
import { Link } from "react-router";
export function Navbar() {

    return (
        <>
            <div className="navbar-container">
                <div className="logo">
                    <img src="/logo.png" alt="Logo" />
                </div>

                <nav className="navbar">
                    <ul className="navbar-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/notes">Notes</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="nav-lower-design"></div>
        </>
    );
}