import {useEffect, useState} from "react";

const ContadorF = (props) => {

    const {manual} = props

    const [contador, setContador] = useState(2)
    const [contadorA, setContadorA] = useState(1)

    const incrementar = () => {
        setContador(
            contador => contador + 1
        )
    }
    const decrementar = () => {
        setContador(
            contador => contador - 1
        )
    }
    const actualizar = () => {
        setContadorA(
            contadorA => contadorA + 1
        )
    }
    useEffect(() => {

        const x = setInterval(() => {
            actualizar()
        }, 2000)

        return () => clearInterval(x)

    }, [])

    return (
        <main className={"alert alert-primary"}>

            {
                manual ? (<><p className={"lead fs-2"}>Contador manual F: {contador} </p>
                    <button className={"btn btn-primary me-2"} onClick={incrementar}>Incrementar</button>
                    <button className={"btn btn-danger me-2"} onClick={decrementar}>Decrementar</button>
                </>) : (<>

                    <p className={"lead fs-3"}>Contador automático F: {contadorA} </p></>)
            }

        </main>
    )
}

export default ContadorF