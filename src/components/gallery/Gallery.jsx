import Card from "../card/Card.jsx";
import logementData from '/public/logements.json'

const Gallery = () => {
    return (
        <div className={"gallery-background"}>
            <div className={"gallery"}>
            {logementData.map((logement) => (  // Map dans logementData et retourne une carte pour chaques entrées
                <Card
                    key={logement.id}  // Key : Pour identifier chaque logement de manière unique dans la liste de logements et pour identifier les changements dans la liste de logements.
                    id={logement.id}
                    figcaption={logement.title}
                    alt={logement.title}
                    image={logement.cover}/>
                )
            )}
        </div>
        </div>
            )
            }



export default Gallery;