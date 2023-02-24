import {useState} from "react";
import {popularData} from "./PopularData";
import Footer from "./Footer";
import Popular from "./Popular";

function Bestseller() {
    const [popular, setPopular] = useState(popularData);
    return(
        <div>
            <div className="block">
                <p>Unsere Bestseller</p>
            </div>
            <Popular popular={popular}/>
            <div className="footer">
                <Footer img="pay.jpeg" shipping="shipping.jpeg"/>
            </div>
        </div>
    )
}

export default Bestseller