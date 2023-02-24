import Footer from "./Footer";
import {slides} from "./Slides";
import {useState} from "react";

function About() {
    const [slide, setSlide] = useState(0);
    const {id, image, title, description} = slides[slide];
    const previousSlide = () => {
        setSlide(slide => {
            slide --;
            if (slide < 0) {
                return slides.length - 1
            }
            return slide
        })
    }
    const nextSlide = () => {
        setSlide(slide => {
            slide++;
            if (slide > slides.length-1) {
                slide = 0;
            }
            return slide
        })
    }

    return (
        <div>
            <div className="bracelet">
            </div>
            <div className="sustainability">
                <p className="caption">NACHHALTIGKEIT</p>
                <p className="about">Deine Welt braucht keine Kompromisse. Das sehen wir bei OJJO genauso. Deshalb geben wir uns nur mit dem Besten zufrieden: Materialien aus nachhaltiger Quelle, chemiefreie, 100-fache Vergoldung für jahrelange Haltbarkeit, faire und nachhaltige Herstellung im Herzen Europas.</p>
            </div>
            <div className="slide">
                <img src={image} width="500px" height="500px"/>
                <div className="slideDesc">
                <p className="gilt">{title}</p>
                <p className="giltDesc">{description}</p>
                </div>

            </div>

            <div className="through">
                <button onClick={previousSlide} className="prev">Zurück</button>
                <button onClick={nextSlide} className="next">Weiter</button>
            </div>

            <div className="sustainability">
                <p className="about">Kleine Veränderungen haben große Auswirkungen. Kleine Schritte eröffnen große Chancen.
                    Du selbst bist das Werk vieler kleiner Schritte und Veränderungen. Deshalb glauben wir,
                    dass die kleinen Dinge des Lebens die größte Wertschätzung verdienen.</p>
            </div>
        <div>
            <Footer img="pay.jpeg" shipping="shipping.jpeg"/>
        </div>
        </div>
    )
}

export default About