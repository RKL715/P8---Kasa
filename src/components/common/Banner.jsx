import PropTypes from "prop-types";

function Banner ({imgSrc, text}) {
  return <div className='banner-background'>
    <img className='banner' src={imgSrc} alt="Image Paysage"/>
    <h1>{text}</h1>
  </div>
}

Banner.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Banner;