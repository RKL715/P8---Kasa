import Banner from "../common/Banner.jsx";
import Gallery from "./Gallery.jsx";

function Home() {
    return (
        <div>

            <Banner imgSrc='/banner.png' text='Chez vous, partout et ailleurs'/>
            <Gallery />

        </div>
    )
}

export default Home;