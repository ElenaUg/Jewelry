import './App.css';
import Home from "./Home"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Logo from "./Logo";
import Shop from "./Shop";
import About from "./About";
import Bestseller from "./Bestseller";


function App() {
    return (
        <Router>
            <nav>
                <Link to="/" className="link">Home</Link>
                <Link to="/shop" className="link">Shop</Link>
                <Link to="/" className="link"><Logo img="logo.png"/></Link>
                <Link to="/bestseller" className="link">Bestseller</Link>
                <Link to="/Über uns" className="link">Über uns</Link>
            </nav>

            <Routes>
                <Route path ="/" element={<Home/>}/>
                <Route path ="/shop" element={<Shop/>}/>
                <Route path ="/" element={<Home/>}/>
                <Route path ="/bestseller" element={<Bestseller/>}/>
                <Route path ="/Über uns" element={<About/>}/>
            </Routes>
        </Router>
    )
}

export default App;
