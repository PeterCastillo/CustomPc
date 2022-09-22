import { Link } from "react-router-dom"

const Procesador = () => {
    return (
        <>
            <h1>Estas en Procesador</h1>
            <Link to={`TarjetaGrafica`}>Seleccionar Tarjeta Grafica</Link>
        </>
    )
}

export default Procesador