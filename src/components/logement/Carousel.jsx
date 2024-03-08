import PropTypes from "prop-types";
import {useState} from "react";
const ImageSlider = ({pictures, title}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }

    const prevSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length - 1);
        }
        else
        setCurrentIndex((prevIndex) => (prevIndex - 1) % pictures.length);
    }

    return (
        <div className={'logement_carousel'}>
            <button className={'carousel_button'} id={'prev'} onClick={prevSlide}><img src={"../public/slider_arrow.png"}  alt="Arrow Left"/>  </button>
            <div className={'logement_carousel_slide'}>
                <img src={pictures[currentIndex]} alt={title[currentIndex]}/>
            </div>
            <button className={'carousel_button'} id={'next'} onClick={nextSlide}><img src={"../public/slider_arrow.png"}
                                                                                       alt="Arrow Left"/> </button>
        </div>
    )

}

ImageSlider.propTypes = {
    pictures: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
}


export default ImageSlider



// <img src={pictures} alt={title} className={'logement_pictures'}/>
