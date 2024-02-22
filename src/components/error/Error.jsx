import Header from "../common/Header.jsx";
import Footer from "../common/Footer.jsx";

function Error() {
    return (
        <div>
            <Header />
            <div className={'error'}>
            <h1>404</h1>
            <p className={'oups'}>
                Oups! La page que vous demandez n&apos;existe pas.
            </p>
            <p className={'accueil'}><a href="/"> Retourner sur la page d&apos;accueil</a></p>
            </div>
            <Footer />
        </div>
    )
}

export default Error