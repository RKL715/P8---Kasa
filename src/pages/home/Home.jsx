import Banner from "../../components/banner/Banner.jsx";
import Gallery from "../../components/gallery/Gallery.jsx";

function Home() {
    return (
        <div>

            <Banner imgSrc='/banner.png' text='Chez vous, partout et ailleurs'/>
            <Gallery />

        </div>
    )
}

export default Home;