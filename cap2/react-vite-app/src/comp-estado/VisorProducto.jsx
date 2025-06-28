import {Component} from "react";
import TProducto from "./TProducto.jsx";

class VisorProducto extends Component{

    state = {
        indice : 0,
        indiceM : 0
    }

    actualizarIndice = () => {
        const {frutas} = this.props;
        this.setState({
            indice:this.state.indice === frutas.length - 1 ? 0 : this.state.indice + 1
        })
    }

    avanzar = () => {
        const {frutas} = this.props;
        this.setState({
            indiceM: this.state.indiceM === frutas.length - 1 ? 0 : this.state.indiceM + 1
        })
    }

    retroceder = () => {
        const {frutas} = this.props;
        this.setState({
            indiceM: this.state.indiceM === 0 ? frutas.length - 1 : this.state.indiceM - 1
        })
    }


    componentDidMount() {
        this.id = setInterval(() => {
            this.actualizarIndice();
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    render (){

        const {frutas,manual, titulo} = this.props;
        return (
            <main className={"container py-3"}>
                <p className={"alert alert-success fs-2"}>Visor de Productos de {titulo}</p>
                <TProducto manual={manual} frutas={frutas} indice={manual ? this.state.indiceM : this.state.indice}
                           avanzar={this.avanzar} retroceder={this.retroceder}
                />



            </main>
        )
    }
}
export default VisorProducto;