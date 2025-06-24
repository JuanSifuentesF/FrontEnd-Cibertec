import AppF from "./AppF.jsx";
import AppC from "./AppC.jsx";

const Inicio = () => {
  return (
      <main className={"container mt-3"}>
          <section className={"row"}>
              <article className={"col col-5 shadow border border-2 me-2 rounded-2"}>
                  <AppF secuencia={1} actividad={"Reunion con el cliente"} avance={100} />
                  <AppF secuencia={2} actividad={"Reunion con los stakeholder"} avance={50} />
                  <AppF secuencia={3} actividad={"Revision de avance"} avance={25}/>
              </article>
              <article className={"col col-6 shadow border border-2 me-2 rounded-2"}>
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
      </main>
  );
};
export default Inicio;