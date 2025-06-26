import {Component} from "react";

class ContadorC extends Component{

    state={
        contador: 1,
        contadorauto: 1
    }


    incrementar = () => {
        this.setState({
            contador: this.state.contador === 10 ? 1 : this.state.contador + 1
        })
    }
    decrementar = () => {
        this.setState({
            contador: this.state.contador === 1 ? 10 : this.state.contador - 1
        })
    }

    actualizarContadorAuto= () => {
        this.setState({
            contadorauto:this.state.contadorauto === 5 ? 1 : this.state.contadorauto + 1
        })
    }

    componentDidMount() {
        this.id = setInterval(this.actualizarContadorAuto, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    render() {
        return(
            <main className={"container py-3"}>
                <p className={"lead fs-2 text-primary"}>Contador: {this.state.contador} </p>
                <p className={"lead fs-2 text-primary"}>Contador Automático: {this.state.contadorauto}</p>
                <button className={"btn btn-primary me-1"} onClick={this.incrementar}>Incrementar </button>
                <button className={"btn btn-success"} onClick={this.decrementar}>Incrementar </button>
            </main>
        )
    }
}
export default ContadorC;