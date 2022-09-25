import { Link } from "react-router-dom"
import {   useSelector } from "react-redux"
import TypeProcesador from "../components/TypeProcesador"

const ProcesadorType = () => {

    const state = useSelector(state => state)
    const { filter } = state.filter

    const procesadorTipo = [
        {
            id: 1,
            img: 'https://images.mktw.net/im-473096?width=1280&size=1',
            marca: "INTEL"
        },
        {
            id: 2,
            img: 'https://t7m8e9c8.rocketcdn.me/wp-content/uploads/2016/12/AMD-ryzen-logo.jpg',
            marca: "AMD"
        }
    ]

    return (
        <div className="components">
            { procesadorTipo.filter(item => {
                let name = item.marca.toLowerCase();
                return (filter.length  > 0)? name.startsWith(filter.toLowerCase()) : true
            })
            .map(item => (
                <TypeProcesador key={item.id} item={item} btn={<Link to={`Procesador`}>Selecionar</Link> } />
            ))
            }
        </div>
    )
}

export default ProcesadorType