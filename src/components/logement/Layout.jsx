import PropTypes from "prop-types";
function Layout ({pictures, title, location, host, rating})  {
const {name, picture} = host;

    return (
        <div className={'logement'}>
        <img src={pictures} alt={title} />
        <h1 className={'logement_title'}>{title}</h1>
        <p className={'logement_location'}>{location}</p>
            <p className={'logement_host_name'}>{name}</p>
            <img className={'logement_host_pic'} src={picture} alt={name}/>
            <div className={'logement_rating'}>{rating}</div>

        </div>
    )
}

Layout.propTypes = {
    pictures: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating : PropTypes.string.isRequired,
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    })
    }
export default Layout;