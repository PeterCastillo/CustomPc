import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import SelectedComponent from "../components/SelectedComponent"

const Comprar = () => {

    const state = useSelector(state => state)
    const { producst } = state.selectedComponents
    const [ total , setTotal ] = useState(0)

    useEffect(()=>{
        const productosSelect = producst.filter(item =>
            item.hasOwnProperty('precio')
        )
        setTotal(productosSelect.reduce( (acc, item)=>{
            return acc = acc + item.precio 
        }, total))
    }, [])



    return (
        <div className="seccion__pc">
            <div className="seccion__pc__products">
                {producst.length > 0 
                ? producst.map(item=>
                    <SelectedComponent item={item}/>
                )
                : <></>}
                <div className="seccion__pc__comprar">
                    <span className="seccion__pc__comprar__price">Total: S/{total}</span>
                    <button className="seccion__pc__comprar__buy">COMPRAR</button>
                </div>
            </div>
        </div>
    )
}

export default Comprar