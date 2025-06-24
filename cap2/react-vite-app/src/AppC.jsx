import { Component } from 'react';

class AppC extends Component {
    render(){

        const {plato, precio, descripción} = this.props;

        return (
            <main>
                <div className={"container"}>
                    <p className={"lead fs-2 text-primary"}>Plato: {plato}</p>
                    <p className={"lead fs-2 text-primary"}>Precio S/{precio}</p>
                    <p className={"alert alert-success"}>Descripción: {descripción}</p>
                </div>
            </main>
        )
    }
}
export default AppC;