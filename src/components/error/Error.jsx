
function Error() {
    return (
        <div>
            <div className={'error'}>
            <h1>404</h1>
            <p className={'oups'}>
                Oups! La page que vous demandez n&apos;existe pas.
            </p>
            <p className={'accueil'}><a href="/"> Retourner sur la page d&apos;accueil</a></p>
            </div>
        </div>
    )
}

export default Error