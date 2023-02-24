function Buttons({filteredJewelry}) {
    return(
        <div>
        <div className="cont">
            <a href="#prod"><button className="btn ring" onClick={() => filteredJewelry("ring")}>Ringe</button></a>
            <a href="#prod"><button className="btn ohrring" onClick={() => filteredJewelry("ohrringe")}>Ohrringe</button></a>
            <a href="#prod"><button className="btn halskette" onClick={() => filteredJewelry("halskette")}>Halskette</button></a>
            <a href="#prod"><button className="btn armband" onClick={() => filteredJewelry("armband")}>Armbänder</button></a>
        </div>
        </div>
    )
}

export default Buttons