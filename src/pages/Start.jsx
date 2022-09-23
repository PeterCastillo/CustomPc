import { Outlet, useSearchParams } from "react-router-dom"

const Start = () => {

    let [ searchParamas , setSearchParamas ] = useSearchParams();

    const handleChange = (e) => {
        let filter = e.target.value
        if(filter){
            setSearchParamas({filter})
        } else {
            setSearchParamas({})
        }
    }

    return (
        <div className="seccion__build">
            <div className="seccion__build__form">
                <input 
                    type="text" 
                    className="seccion__build__form__input"
                    placeholder="Ingresa pieza"
                    onChange={handleChange}
                    value={searchParamas.get("filter") || "" }
                />
                <button className="seccion__build__form__btn">←</button>
            </div>
            <Outlet/>
        </div>
    )
}

export default Start