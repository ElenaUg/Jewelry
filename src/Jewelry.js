
function Jewelry({jewelry}) {

    return(
        <div className="products">
            {jewelry.map((element => {
                const{id, name, searchTerm, price, image} = element;
                return(
                    <div className="scale product-card" key={id}>
                        <img src={image} alt="Schmuck" width="350px" height="350px"/>
                        <div className="product-info">
                            <h4>{name}</h4>
                            <h5>{price}€</h5>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}

export default Jewelry