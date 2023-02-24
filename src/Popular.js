
function Popular({popular}) {

    return(
        <div className="products">
            {popular.map((element => {
                const{id, name, price, image} = element;
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

export default Popular
