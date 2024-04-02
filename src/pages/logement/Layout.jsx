import PropTypes from "prop-types";
import Dropdown from "../../components/dropdown/Dropdown.jsx";
import Rating from "../../components/rating/rating.jsx";
import ImageSlider from "../../components/carousel/Carousel.jsx";
import {useEffect, useState} from "react";
function Layout ({pictures, title, location, host, rating, tags, description,equipments}) {
    const {name, picture} = host;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Crée une variable d'état windowWidth et une fonction setWindowWidth qui prend en paramètre la largeur de la fenêtre

    useEffect(() => { // Utilise la fonction useEffect pour mettre à jour la largeur de la fenêtre
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }; // Crée une fonction handleResize qui met à jour la largeur de la fenêtre

        window.addEventListener('resize', handleResize); // Ajoute un écouteur d'événements pour redimensionner la fenêtre

        return () => {
            window.removeEventListener('resize', handleResize); // Supprime l'écouteur d'événements pour redimensionner la fenêtre
        };
    }, []); // Utilise un tableau vide pour que la fonction useEffect ne s'exécute qu'une seule fois

    return (
        <div className={'logement'}>

            <ImageSlider pictures={pictures} title={title} /> {/* Appelle le composant ImageSlider et lui passe les props pictures et title */}

            <div className={'logement_first_row'}>  {/* Crée une div pour la première ligne */}
                <div className={'logement_first_row_infos'}>
                    <div className={'logement_infos'}>
                        <h1 className={'logement_title'}>{title}</h1>
                        <p className={'logement_location'}>{location}</p>
                    </div>

                    {windowWidth > 700 ? ( // Si la largeur de la fenêtre est supérieure à 861px
                        <div className={'logement_host_desktop'}>
                            <p className={'logement_host_name_desktop'}>{name}</p>
                            <img className={'logement_host_pic_desktop'} src={picture} alt={name}/>
                        </div>
                    ) : null }
                </div>
            </div>

            <div className={'logement_second_row'}> {/* Crée une div pour la deuxième ligne */}
                <div className={'logement_tags'}>{tags.map((tag, index) => (<div key={index} className={'logement_tags_item'}>{tag}</div>)) }</div>
                <div className={'logement_rating_and_host'}><Rating rating={rating}/>

                    {windowWidth <= 700 ? ( // Si la largeur de la fenêtre est inférieure ou égale à 861px
                    <div className={'logement_host_mobile'}>
                        <p className={'logement_host_name_mobile'}>{name}</p>
                        <img className={'logement_host_pic_mobile'} src={picture} alt={name}/>
                    </div>
                    ) : null}

                </div>
            </div>

            <div className={'logement_third_row'}> {/* Crée une div pour la troisième ligne */}
                <div><Dropdown name={'Description'} text={description} className={'logement_description'}/></div>
                <div><Dropdown name={'Équipements'} text={equipments}> {/* Appelle le composant Dropdown et génère une liste des équipements grâce à la methode .map */}
                    <ul> {equipments.map((equipment, index) => (
                        <li key={index} className={'logement_equipments'}>{equipment}</li>))} </ul>
                </Dropdown></div>
            </div>

        </div>
    )
}


Layout.propTypes = {
    pictures: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }),
    description: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
    // equipments: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired,


    }
export default Layout;