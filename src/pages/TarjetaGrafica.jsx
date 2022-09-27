import { Link } from "react-router-dom"

const TarjetaGrafica = () => {
    return (
        <>
            <h1>Estas en TarjetaGrafica</h1>
            <Link to={`Ram`}>Selecionar Ram</Link>
            <Link to={`/PC`}>Comprar</Link>
        </>
    )
}

export default TarjetaGrafica