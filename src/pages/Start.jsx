import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { filterOnChange, resetFilter } from "../actions/filterActions";
import { delComponent } from "../actions/SelectedComponentsActions";
import { useState } from "react";
import SelectedComponent from "../components/SelectedComponent";

const Start = () => {

    const state = useSelector(state => state)
    const dispach = useDispatch()
    const { filter } = state.filter
    const { producst } = state.selectedComponents

    const navigate = useNavigate()

    const handleBack = () => {
        dispach(resetFilter())
        dispach(delComponent())
        navigate(-1)
    }

    const [ toggle , setToggle ] = useState(false)

    const handleOpen = () =>  {
        setToggle(true)
    }

    const handleClose = () =>  {
        setToggle(false)
    }

    return (
        <div className="seccion__build">
            <div className="seccion__build__form">
                <input 
                    type="text" 
                    className="seccion__build__form__input"
                    placeholder="Ingresa pieza"
                    name="filter"
                    onChange={(e)=>dispach(filterOnChange(e.target.value))}
                    value={filter}
                />
                <button className="seccion__build__form__btn" onClick={handleBack}>←</button>
            </div>
            <Outlet/>
            <div className="seccion__build__open" onClick={()=>handleOpen()}>←</div>
            <div className={`seccion__build__selected  ${toggle? 'seccion__build__selected-toggle': ''}`}>
                <div className={`seccion__build__selected__selected`}>
                    <div className="seccion__build__selected__selected__open" onClick={()=>handleClose()}>→</div>
                    {producst.length > 0 
                    ? producst.map(item=>
                    <SelectedComponent key={item.id} item={item}/>
                    )
                    : <></>}
                </div>
                <div className={`seccion__build__selected__black`} onClick={()=>handleClose()}></div>
            </div>
        </div>
    )
}

export default Start