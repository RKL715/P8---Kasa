import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

function Card({alt, image, figcaption, id}) {
    const navigate = useNavigate()
    const handleClick = () => { // create a handleClick function that uses the useNavigate hook to navigate to the logement page with the id of the logement
        navigate('/Logement/' + id)
    }
  return (
      <div className={'card-handle'} onClick={handleClick}> {/* add an onClick event to the card that calls the handleClick function */}
    <figure className='card'> {/* create a figure element with a class of card */}
        <img src={image} alt={alt} /> {/* add an img element with the src and alt attributes */}
        <figcaption>{figcaption}</figcaption> {/* add a figcaption element with the figcaption as the text */}
    </figure>

    </div>
)
}

Card.propTypes = {
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    figcaption: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default Card;