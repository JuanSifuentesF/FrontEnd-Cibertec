// src/comp/CardFruta.jsx
const CardFruta = (props) => {
    const {frutas} = props;
    return (
        <>
            <div>
                <section className={"row py-4"}>
                    {
                        frutas.map((fruta, index) => (
                            <article className={"col col-4 text-center"} key={index}>
                                <div className={"card shadow border border-2 me-2 rounded-2"}>
                                    <div className={"card-header bg-primary text-white"}>
                                        Fruta: {fruta.nombre}
                                    </div>
                                    <div className={"card-body"}>
                                        <img src={fruta.imagen}
                                             alt=""
                                             style={{maxWidth: "100px", height: "auto"}}/>
                                    </div>
                                    <div className={"card-footer"}>
                                        Precio: {fruta.precio}
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </section>
            </div>
        </>
    )
}
export default CardFruta;