// function ButtonSchmuck() {
//     return (
//       <button className="katalog">Schmuck</button>
//     )
// }
//
// export default ButtonSchmuck

import {useState} from "react";

function Desc() {
    const description = "So schön Silber, Gold und Platin auch glänzen mögen, die volle Wirkung entfalten Edelmetalle doch erst zusammen mit funkelnden Edelsteinen. Wir sind auf Farbedelsteine spezialisiert. Bei uns finden Sie hochwertigen Edelsteinschmuck mit atemberaubenden Steinen aus allen Teilen der Welt, zu unschlagbar günstigen Preisen. Dank lokalen Partnern in Indien und Thailand und erfahrener Edelstein-Einkäufer, die auf allen wichtigen Edelsteinmärkten der Welt oder direkt in den Abbaugebieten für Sie unterwegs sind, können wir Ihnen die ganze Vielfalt der Edelsteinwelt nahebringen und dabei viele Zwischenhändler aussparen, die den Preis sonst nur unnötig in die Höhe treiben. Statt sich nur auf die vier großen Namen unter den Edelsteinen (Diamant, Saphir und Rubin) und wenigen anderen zu begrenzen, bieten wir Ihnen auch selten gehandelte und exklusive Highlights wie Demantoid, Zultanit, Tsavorit oder Capelinha-Sphen an. Auch extrem rare Exemplare von Edelsteinen mit besonderen optischen Effekten wie das Skapolith-Katzenauge, der Rutilquarz, Sternrubin oder Farbwechsel-Saphir finden Sie bei uns. Tansanite, die 1.000 Mal seltener sind als Diamanten, führen wir zusammen mit einigen anderen Steinen wie Aquamarin, Smaragd, Ceylon-Saphir oder die begehrten Paraiba-Turmaline sogar in der besonders wertvollen AAA-Qualität."
    const [showMore, setShowMore] = useState(false)

    return(
        <div className="katalog">
        <p>{showMore ? description : description.substring(0,321)}</p>
            <button onClick={() => setShowMore(!showMore)}>{showMore ? "- Weniger" : "+ Mehr erfahren"}</button>
        </div>
    )
}

export default Desc