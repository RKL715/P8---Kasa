import PropTypes from "prop-types";

function Card({alt, image, figcaption}) {
  return (
    <figure className='card'>
        <img src={image} alt={alt} />
        <figcaption>{figcaption}</figcaption>
    </figure>
)
}

Card.propTypes = {
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    figcaption: PropTypes.string.isRequired
}

export default Card;