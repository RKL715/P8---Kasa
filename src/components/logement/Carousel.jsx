import PropTypes from "prop-types";
import {useState} from "react";

// ImageSlider component
const ImageSlider = ({pictures, title}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    } // Donne au CurrentIndex la valeur de prevIndex + 1 modulo la longueur de pictures.

    const prevSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length - 1);
        } // Si currentIndex est égal à 0, donne à currentIndex la valeur de la longueur de pictures - 1 afin de loop.
        else
        setCurrentIndex((prevIndex) => (prevIndex - 1) % pictures.length);
    } // Sinon donne à currentIndex la valeur de prevIndex - 1 modulo la longueur de pictures.

    return (
        <div className={'logement_carousel'}>
            <button className={'carousel_button'} id={'prev'} onClick={prevSlide}><img src={"../public/slider_arrow.png"}  alt="To previous slide" height={'100%'}/>  </button>
            <div className={'logement_carousel_slide'}>
                <img src={pictures[currentIndex]} alt={title[currentIndex]}/>
                <p className={'logement_carousel_number'}> {currentIndex + 1} / {pictures.length} </p> {/* Le counter : currentIndex + 1 / la longueur de pictures */}
            </div>
            <button className={'carousel_button'} id={'next'} onClick={nextSlide}><img src={"../public/slider_arrow.png"}
                                                                                       alt="To next slide" height={'100%'} /> </button>
        </div>
    )

}

ImageSlider.propTypes = {
    pictures: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
}


export default ImageSlider