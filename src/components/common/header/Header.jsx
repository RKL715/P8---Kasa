import {NavLink, useLocation} from "react-router-dom";

function Header() {
    return (
        <header>
            <div>
                <a href="/">
                <img src="/header.svg" alt="Logo Kasa" width="100" height="100"/>
                </a>
            </div>
            <Navbar />
        </header>
    )

}

const Navbar = () => {
    const location = useLocation();
    return (
        <nav>
            <NavLink
                to="/"
            style={{ textDecoration: location.pathname === "/" ? "underline" : "none" }}
            >
                ACCUEIL
            </NavLink>
            <NavLink
                to="/about"
            style={{ textDecoration: location.pathname === "/about" ? "underline" : "none" }}
            >
                A PROPOS
            </NavLink>
        </nav>
    )
}

export default Header;