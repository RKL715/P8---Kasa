import Layout from "./Layout.jsx";
import logementData from '/public/logements.json'
import {useParams} from "react-router-dom";
import Error from "../error/Error.jsx";


const Logement = () => {
    const {id} = useParams() // Utilise le hook useParams pour obtenir l'id du logement
    {

        let logement = logementData.find((logement) => logement.id === id) // Utilise la méthode find pour trouver le logement avec l'id qui correspond à l'id du hook useParams;

        if (logement) {  // Si le logement est trouvé, renvoie le logement
            return (
                <div>
                    <div>
                        <Layout
                            key={logement.id}  // Key : Pour identifier chaque logement de manière unique dans la liste de logements et pour identifier les changements dans la liste de logements.
                            pictures={logement.pictures}
                            title={logement.title}
                            location={logement.location}
                            host={logement.host}
                            rating={logement.rating}
                            tags={logement.tags}
                            description={logement.description}
                            equipments={logement.equipments}
                        />
                    </div>
                </div>
            )
        }
       else  {
            return (
                <Error />  // Si le logement n'est pas trouvé, renvoie la page d'erreur
            )
        }

}}


export default Logement;