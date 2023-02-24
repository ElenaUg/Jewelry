import {useState} from "react";
import {data} from "./Data";
import Jewelry from "./Jewelry";
import Buttons from "./Buttons";
import Jewelrybox from "./Jewelrybox";
import Footer from "./Footer";

function Shop() {
    const [jewelry, setJewelry] = useState(data);
    const chosenJewelry = (searchTerm) => {
        const newJewelry = data.filter(element => element.searchTerm === searchTerm);
        setJewelry(newJewelry)
    }

    return (
        <div>
        <div className="block">
            <p>Liebe auf den ersten Blick</p>
        </div>
            <div>
                <Buttons filteredJewelry = {chosenJewelry}/>
            </div>
            <Jewelrybox />
            <div className="block">
            <p className="title"  id="prod">Edlen Schmuck</p>
            </div>
            <Jewelry jewelry={jewelry}/>
            <div className="footer">
            <Footer img="pay.jpeg" shipping="shipping.jpeg"/>
            </div>
        </div>


    )
}

export default Shop
