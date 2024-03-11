import PropTypes from "prop-types";
import Dropdown from "../common/Dropdown.jsx";
import Stars from "./stars.jsx";
import ImageSlider from "./Carousel.jsx";
function Layout ({pictures, title, location, host, rating, tags, description,equipments})  {
const {name, picture} = host;

    return (
        <div className={'logement'}>

            <ImageSlider pictures={pictures} title={title} />
            {/*<img src={pictures} alt={title} className={'logement_pictures'}/>*/}

            <div className={'logement_first_row'}>
                <div className={'logement_infos'}>
                    <h1 className={'logement_title'}>{title}</h1>
                    <p className={'logement_location'}>{location}</p>
                </div>
                <div className={'logement_host'}>
                    <p className={'logement_host_name'}>{name}</p>
                    <img className={'logement_host_pic'} src={picture} alt={name}/>
                </div>
            </div>

            <div className={'logement_second_row'}>
                <div className={'logement_tags'}>{tags.map((tag, index) => (<div key={index} className={'logement_tags_item'}>{tag}</div>)) }</div>
                <div><Stars rating={rating}/>
                </div>
            </div>

            <div className={'logement_third_row'}>
                <div><Dropdown name={'Description'} text={description} className={'logement_description'}/></div>
                <div><Dropdown name={'Équipements'} text={equipments}>
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