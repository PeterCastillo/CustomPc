import {  useDispatch } from "react-redux"
import { resetFilter } from "../actions/filterActions"
import { addComponent } from "../actions/SelectedComponentsActions"


const TypeProcesador = ({ item , btn }) => {
    
    const {  img , marca } = item

    const dispach = useDispatch()

    const handleSelect = (item) => {
        dispach(resetFilter())
        dispach(addComponent(item))
    }

    return (
        <div className="components__component">
            <div className="components__component__typeImg">
                <img src={img} alt={marca} />
            </div>
            <span className="components__component__typeName">{marca}</span>
            <button className="components__component__typebtn" onClick={()=>handleSelect(item)}>{btn}</button>
        </div>
    )
}

export default TypeProcesador