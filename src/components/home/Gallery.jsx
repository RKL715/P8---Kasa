import Card from "./Card.jsx";
import logementData from '/public/logements.json' // import the logementData from the logements.json file

const Gallery = () => {
    return (
        <div className={"gallery-background"}>
            <div className={"gallery"}>
            {logementData.map((logement) => (  // map through the logementData array and render a Card component for each logement
                <Card
                    key={logement.id}  // pass the id, figcaption, alt, and image props to the Card component
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