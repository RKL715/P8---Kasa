    import PropTypes from "prop-types";
    import {useNavigate} from "react-router-dom";

    function Card({alt, image, figcaption, id}) {
        const navigate = useNavigate() // utilise useNavigate hook pour naviguer vers une autre page
        const handleClick = () => { // créer une fonction handleClick qui utilise le navigate hook pour naviguer vers la page Logement avec l'id du logement
            navigate('/Logement/' + id)
        }
      return (
          <div className={'card-handle'} onClick={handleClick}> {/* ajoute un div avec une classe de card-handle et un onClick event qui appelle la fonction handleClick */}
        <figure className='card'>
            <img src={image} alt={alt} />
            <div className={"overlay"}> </div>
            <figcaption>{figcaption}</figcaption>
        </figure>

        </div>
    )
    }

    Card.propTypes = {
        alt: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        figcaption: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }

    export default Card;