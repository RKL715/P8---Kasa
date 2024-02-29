import Header from "../common/Header.jsx";
import Footer from "../common/Footer.jsx";
import Layout from "./Layout.jsx";
import logementData from '/public/logements.json' // import the logementData from the logements.json file

const Logement = () => {
    return (
        <div>
        <Header />
        <div>
            {logementData.map((logement) => (  // map through the logementData array and render a Card component for each logement
                <Layout
                    key={logement.id}  // Key : To identify which items have changed, are added, or are removed.
                    pictures={logement.pictures[0]}
                    title={logement.title}
                    location={logement.location}
                host={logement.host}
                rating={logement.rating}
                />
            )
            )}

        </div>
        <Footer />
</div>
    )
}


export default Logement;