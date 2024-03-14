import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Error from "./components/error/Error.jsx";
import Logement from "./components/logement/Logement.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="logement/:id" element={<Logement />} />
                <Route path="*" element={<Error />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default App;