const AppF = (props) => {

    const {secuencia, actividad, avance} = props;

    return (
        <main className={"container"}>
            {
                avance === 25 || avance === 50 ?
                (<>
                    <p className={"lead fs-2 text-primary"}>Actividad {secuencia}</p>
                    <p className={"alert alert-primary"}>Avance: {avance}%</p>
                    <p className={"alert alert-primary"}>{actividad}</p>
                </>) :
                    (<></>)
            }



        </main>
    )
}
export default AppF;