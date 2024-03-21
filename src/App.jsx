import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Error from "./components/error/Error.jsx";
import Logement from "./components/logement/Logement.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/common/header/Header.jsx";
import Footer from "./components/common/footer/Footer.jsx";

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

// BrowserRouter est un composant qui permet de gérer les routes de notre application.
// Routes est un composant qui permet de définir les routes de notre application dans lequel on ajoute chaque Route qui sont les pages de notre application.
// index permet de définir la page d'accueil de notre application.
// path permet de définir le chemin de la route et "elements" permet de définir le composant à afficher pour la route (le fichier à afficher).
// * permet de définir une route par défaut si aucune route ne correspond.
// Les composants Header et Footer sont affichés sur toutes les pages de notre application donc ils sont placés en dehors de Routes.
