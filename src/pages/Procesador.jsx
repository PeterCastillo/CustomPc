import {  useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Component from "../components/Component"

const Procesador = () => {

    const state = useSelector(state => state)
    const { filter } = state.filter

    const componentes = [
        {
            id:2,
            img : 'https://www.infotec.com.pe/56593-large_default/procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200.jpg',
            nombre : 'PROCESADOR INTEL CORE I3 10100F BX8070110100F 3 6GHZ 6 0MB LGA 1200',
            precio: 329,
            detalles: 'https://www.infotec.com.pe/procesadores/19047-procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200-5032037192620.html'
        },
        {
            id:3,
            img : 'https://www.infotec.com.pe/56593-large_default/procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200.jpg',
            nombre : 'PROCESADOR INTEL CORE I3 10100F BX8070110100F 3 6GHZ 6 0MB LGA 1200',
            precio: 329,
            detalles: 'https://www.infotec.com.pe/procesadores/19047-procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200-5032037192620.html'
        },
        {
            id:1,
            img : 'https://www.infotec.com.pe/56593-large_default/procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200.jpg',
            nombre : 'PROCESADOR INTEL CORE I3 10100F BX8070110100F 3 6GHZ 6 0MB LGA 1200',
            precio: 329,
            detalles: 'https://www.infotec.com.pe/procesadores/19047-procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200-5032037192620.html'
        },
        {
            id:4,
            img : 'https://www.infotec.com.pe/56593-large_default/procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200.jpg',
            nombre : 'PROCESADOR INTEL CORE I3 10100F BX8070110100F 3 6GHZ 6 0MB LGA 1200',
            precio: 329,
            detalles: 'https://www.infotec.com.pe/procesadores/19047-procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200-5032037192620.html'
        },
        {
            id:5,
            img : 'https://www.infotec.com.pe/36916-large_default/procesador-intel-pentium-gold-g5420-bx80684g5420-38ghz-40mb-lga-1151.jpg',
            nombre : 'PROCESADOR INTEL PENTIUM GOLD G5420 (BX80684G5420) 3.8GHZ 4.0MB | LGA 1151',
            precio: 320,
            detalles: 'https://www.infotec.com.pe/procesadores-intel/18108-procesador-intel-pentium-gold-g5420-bx80684g5420-38ghz-40mb-lga-1151-5032037155168.html'
        }
    ]
    
    return (
        <div className="components">
            { componentes.filter(item => {
                let name = item.nombre.toLowerCase();
                return (filter.length  > 0)? name.startsWith(filter.toLowerCase()) : true
            })
            .map(item => (
                <Component key={item.id} item={item} btn={<Link to={`TarjetaGrafica`}>Seleccionar</Link>}/>
            ))
            }
        </div>
    )
}

export default Procesador