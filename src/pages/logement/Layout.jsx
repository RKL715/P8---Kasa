import PropTypes from "prop-types";
import Dropdown from "../../components/dropdown/Dropdown.jsx";
import Rating from "../../components/rating/rating.jsx";
import ImageSlider from "../../components/carousel/Carousel.jsx";
function Layout ({pictures, title, location, host, rating, tags, description,equipments})  {
const {name, picture} = host;

    return (
        <div className={'logement'}>

            <ImageSlider pictures={pictures} title={title} /> {/* Appelle le composant ImageSlider et lui passe les props pictures et title */}

            <div className={'logement_first_row'}>  {/* Crée une div pour la première ligne */}
                <div className={'logement_first_row_infos'}>
                    <div className={'logement_infos'}>
                        <h1 className={'logement_title'}>{title}</h1>
                        <p className={'logement_location'}>{location}</p>
                    </div>
                </div>
            </div>

            <div className={'logement_second_row'}> {/* Crée une div pour la deuxième ligne */}
                <div className={'logement_tags'}>{tags.map((tag, index) => (<div key={index} className={'logement_tags_item'}>{tag}</div>)) }</div>
                <div className={'logement_rating_and_host'}><Rating rating={rating}/>
                    <div className={'logement_host'}>
                        <p className={'logement_host_name'}>{name}</p>
                        <img className={'logement_host_pic'} src={picture} alt={name}/>
                    </div>
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