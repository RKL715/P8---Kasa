import Header from "../common/Header.jsx";
import Footer from "../common/Footer.jsx";
import Layout from "./Layout.jsx";
import logementData from '/public/logements.json' // import the logementData from the logements.json file
import {useParams} from "react-router-dom"; // import the useParams hook from react-router-dom


const Logement = () => {
    const {id} = useParams() // use the useParams hook to get the id of the logement
    {
        let logement = logementData.find((logement) => logement.id === id) // use the find method to find the logement with the id that matches the id from the useParams hook;
        return (
        <div>
        <Header />
        <div>
                <Layout
                    key={logement.id}  // Key : To identify which items have changed, are added, or are removed.
                    pictures={logement.pictures[0]}
                    title={logement.title}
                    location={logement.location}
                host={logement.host}
                rating={logement.rating}
                />
        </div>
        <Footer />
</div>
    )
}}


export default Logement;