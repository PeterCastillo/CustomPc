import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { filterOnChange, resetFilter } from "../actions/filterActions";

const Start = () => {

    const state = useSelector(state => state)
    const dispach = useDispatch()
    const { filter } = state.filter

    const navigate = useNavigate()

    const handleBack = () => {
        dispach(resetFilter())
        navigate(-1)
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
        </div>
    )
}

export default Start