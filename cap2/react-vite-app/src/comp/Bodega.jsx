import CardFruta from "./CardFruta.jsx";
import TablaFruta from "./TablaFruta.jsx";

const Bodega = (props) => {
    const {frutas, salida} = props;
    return (
        <main>
            <p className={"lead fs-2"}>
                Bodega Total Frutas: {frutas.length}
            </p>
            {
                salida === 1 ?
                    (<TablaFruta frutas={frutas}/>) : <CardFruta frutas={frutas}/>
            }
        </main>
    )
}
export default Bodega;