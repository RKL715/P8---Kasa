import Header from "../common/Header.jsx";
import Footer from "../common/Footer.jsx";
import Banner from "../common/Banner.jsx";
import Gallery from "./Gallery.jsx";

function Home() {
    return (
        <div>
            <Header />
            <Banner imgSrc='../public/banner.png' text='Chez vous, partout et ailleurs'/>
            <Gallery />
            <Footer />
        </div>
    )
}

export default Home;