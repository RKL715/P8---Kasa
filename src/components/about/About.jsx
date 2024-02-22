import Header from "../common/Header.jsx";
import Footer from "../common/Footer.jsx";
import Banner from "../common/Banner.jsx";
function About() {
    return (
        <div>
            <Header />
            <Banner imgSrc='../public/bannerabout.png' text=' '/>
            <div className={'about'}>
            <p>
                Placeholder for about page
            </p>
            </div>
            <Footer />
        </div>
    )
}

export default About;
