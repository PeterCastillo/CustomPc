import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div className="seccion__home">
            <Link to={`buildPc/TipoProcesador`}><button className="seccion__home__start">Get Started</button></Link>
        </div>
    )
}

export default Home