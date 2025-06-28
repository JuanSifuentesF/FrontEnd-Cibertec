import AppF from "./AppF.jsx";
import AppC from "./AppC.jsx";
import {data} from "./data";
import ContadorC from "./comp-estado/ContadorC.jsx";
import VisorProducto from "./comp-estado/VisorProducto.jsx";
import RelojC from "./comp-estado/RelojC.jsx";
import ContadorF from "./comp-hook/ContadorF.jsx";

const Inicio = () => {

    const {frutas, fnProductosEnOferta, fnProductosImportados} = data;

    return (
        <main className={"container mt-3"}>
            <section className={"row"}>
                <article className={"col-12 shadow border-2 me-2 rounded-2"}>
                    <RelojC/>
                </article>
            </section>
            <hr/>
            <section className={"row"}>
                <article className={"col-6 shadow border-2 me-2 rounded-2"}>
                    <ContadorF manual={true}/>
                </article>
                <article className={"col-5 shadow border-2 me-2 rounded-2"}>
                    <ContadorF manual={false}/>
                </article>
            </section>
            <hr/>
            <section className={"row"}>
                <article className={"col-6 shadow border-2 me-2 rounded-2"}>
                    <VisorProducto frutas={frutas} manual={true} titulo={"Bodeguita"}/>
                </article>
                <article className={"col-5 shadow border-2 me-2 rounded-2"}>
                    <VisorProducto frutas={frutas} manual={false} titutlo={"Don Pedrito"}/>
                </article>
            </section>
            <hr/>
            <section className={"row"}>
                <article className={"col-6 shadow border-2 me-2 rounded-2"}>
                    <VisorProducto frutas={fnProductosEnOferta()} manual={true} titulo={"Menos de 4 Soles"}/>
                </article>
                <article className={"col-5 shadow border-2 me-2 rounded-2"}>
                    <VisorProducto frutas={fnProductosImportados()} manual={true} titutlo={"Importados"}/>
                </article>
            </section>
            <hr/>
            <section className={"row"}>
                <article className={"col-6 shadow border-2 me-2 rounded-2"}>
                    <ContadorC salida={true}/>
                </article>
                <article className={"col-5 shadow border-2 me-2 rounded-2"}>
                    <ContadorC salida={false}/>
                </article>
            </section>
            <hr/>
            <section className={"row"}>
                <article className={"col col-6 shadow border border-2 me-2 rounded-2"}>
                    <AppF secuencia={1} actividad={"Reunion con el cliente"} avance={100}/>
                    <AppF secuencia={2} actividad={"Reunion con los stakeholder"} avance={50}/>
                    <AppF secuencia={3} actividad={"Revision de avance"} avance={25}/>
                </article>
                <article className={"col col-5 shadow border border-2 me-2 rounded-2"}>
                    <AppC
                        plato={"Lomo saltado"}
                        precio={12.50}
                        descripción={"Lomo de salto con salsa de tomate"}
                    />
                    <AppC
                        plato={"Aji de gallina"}
                        precio={15.00}
                        descripción={"Aji de gallina con salsa de tomate"}
                    />
                    <AppC
                        plato={"Aji de cerdo"}
                        precio={18.00}
                        descripción={"Aji de cerdo con salsa de tomate"}
                    />
                </article>
            </section>
            <hr/>
            <section className={"row"}>
                <article className={"col-6 shadow border-2 me-2 rounded-2"}>
                    <ContadorC salida={false}/>
                </article>
                <article className={"col-5 shadow border-2 me-2 rounded-2"}>
                    <ContadorC salida={true}/>
                </article>
            </section>
        </main>
    );
};
export default Inicio;
