//
const TablaFruta = (props) => {
    const {frutas} = props;
    return (
        <>
            <div className={"table-responsive"}>
                <table className={"table table-striped table-hover"}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fruta</th>
                        <th>Precio</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        frutas.map((fruta, index) => (
                            <tr key={index}>
                                <td>{fruta.id}</td>
                                <td>{fruta.nombre}</td>
                                <td>{fruta.precio}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default TablaFruta;