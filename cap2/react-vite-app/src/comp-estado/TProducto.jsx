import {Component} from "react";

class TProducto extends Component {
    render() {
        const {frutas, indice, manual, avanzar, retroceder} = this.props;
        return (

            <section className={"card shadow"}>
                <div className={"card-header"}>
                    <img src={frutas[indice].imagen} style={{maxWidth: "50%"}} className={"img-fluid"} alt="imagen"/>
                </div>
                <div className={"card-body"}>
                    {frutas[indice].nombre} -
                    S/ {frutas[indice].precio}
                </div>
                {
                    manual ?
                        (
                            <div className={"card-footer"}>
                                <button className={"btn btn-success me-3 my-2"} onClick={() => avanzar()}>Avanzar
                                </button>
                                <button className={"btn btn-primary my-2"} onClick={() => retroceder()}>Retroceder
                                </button>
                            </div>
                        )
                        :
                        (<></>)
                }
                <div className={"card-footer"}></div>
            </section>
        )
    }
}

export default TProducto;