import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div>
            <h1>Estas en Home</h1>
            <Link to={`buildPc/TipoProcesador`}>Get Started</Link>
        </div>
    )
}

export default Home