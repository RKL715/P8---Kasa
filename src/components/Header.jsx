import header from '/public/header.svg';
function Header() {
    return (
        <header>
            <div>
                <img src={header} alt="Logo Kasa" width="100" height="100"/>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Accueil</a>
                    </li>
                    <li>
                        <a href="#">A propos</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;