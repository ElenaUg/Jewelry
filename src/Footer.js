function Footer(props) {
    return(
        <div className="contact">
            <div className="unit">
                <div>
                <p className="info">Zahlungsinformation</p>
                <hr/>
                </div>
                <div>
                    <img src={props.img} alt="Pay" width="160px" height="120px"/>
                </div>
            </div>

            <div className="unit">
                <div>
                    <p className="info">Kundenservice</p>
                    <hr/>
                </div>
                <p>Kostenlose Hotline:<a href="tel.:08002007559"> 0800 200 7559</a></p>
                <p>Schreiben Sie uns:<a href="mailto:ojjo@ojjo.de"> ojjo@ojjo.de</a></p>
            </div>

            <div className="unit">
                <div>
                    <p className="info">Versandinformation</p>
                    <hr/>
                </div>
                <img src={props.shipping} alt="Pay" width="150px" height="120px"/>
            </div>



        </div>
    )
}

export default Footer