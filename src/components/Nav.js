import { Link } from "react-router-dom";

export default function Nav() {
    return(
        <div className="nav nav-justified bg-secondary ">
            <Link className="nav-link" to="/">
                <div className="navbar-text text-white fs-4">Stocks</div>
            </Link>
            <Link className="nav-link" to='about'>
                <div className="navbar-text text-white fs-4 ">About</div>
            </Link>
        </div>
    );
}