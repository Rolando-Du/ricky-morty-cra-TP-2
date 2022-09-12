import { Link } from "react-router-dom";
import "./style/navbar.css";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <ul className="nav-ul">
                <li className="nav-li">
                    <Link className="nav-link" to="/">
                        HOME
                    </Link>
                </li>
                <li className="nav-li">
                    <Link className="nav-link" to="/users">
                        USERS
                    </Link>
                </li>
                <li className="nav-li">
                    <Link className="nav-link" to="/card">
                        CARDS
                    </Link>
                </li>
                <li className="nav-li">
                    <Link className="nav-link" to="/contact-us">
                        CONTACT US
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
