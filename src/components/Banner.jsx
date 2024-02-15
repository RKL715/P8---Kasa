import banner from '/public/banner.png';
function Banner  () {
  return <div className='banner-background'>
    <img className='banner' src={banner} alt="Bannière : Chez vous, partout et ailleurs"/>
    <h1>Chez vous, partout et ailleurs</h1>
  </div>
}

export default Banner;