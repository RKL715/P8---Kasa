import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Error from "./components/error/Error.jsx";
import Logement from "./components/logement/Logement.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<Error />} />
                <Route path="logement" element={<Logement />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;