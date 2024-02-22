import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ReactDOM from "react-dom/client";

// function App() {
//     return <RouterProvider router={router}/>
// }
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;