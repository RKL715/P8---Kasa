import header from '/public/header.svg';

function Footer() {
    return (
        <footer>
            <div><img src={header} alt="Logo Kasa" width="100" height="100"/></div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;