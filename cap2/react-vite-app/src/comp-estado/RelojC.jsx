import {Component} from "react";

class RelojC extends Component{


    state = {
        fecha : new Date()
    }

    actualizarFecha= ()=>{
        this.setState(
            {
                fecha:new Date()
            }
        )
    }

    componentDidMount() {
        this.x=setInterval(()=>{
            this.actualizarFecha()
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.x)
    }

    render (){
        return (
            <main className={"alert alert-success"}>
                <p className={"lead fs-2"}>Fecha: {this.state.fecha.toLocaleString()}</p>
            </main>
        )
    }
}

export default RelojC;