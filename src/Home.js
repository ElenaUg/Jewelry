import './App.css';
import Desc from "./ButtonSchmuck";
import Footer from "./Footer";



function Home() {
    return (
<div>
        <div  className="mainBlock">
            <div className="container">
                <p className="header">Entdecke das perfekte Geschenk</p>
               <Desc />
            </div>

        </div>
    <Footer img="pay.jpeg" shipping="shipping.jpeg"/>
    </div>


    );
}

export default Home;
