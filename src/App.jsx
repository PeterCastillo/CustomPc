import { useState } from "react"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import './style/seccion.scss'

function App() {

  const state = useSelector( state => state)
  const { producst } = state.selectedComponents

  const [ toggle , setToggle ] = useState(false)

  const handleOpen = () =>  {
    setToggle(true)
    console.log(toggle)
  }

  const handleClose = () =>  {
    setToggle(false)
    console.log(toggle)
  }


  return (
    <section className="seccion__container">
      <div className="seccion">
        <span className="seccion__title">Diseña tu propia PC</span>
        <Outlet/>
        <div className={`seccion__selected ${toggle? 'seccion__selected-toggle': ''}`}>
          <div className={`seccion__selected__selected ${toggle? 'seccion__selected-toggle__toggle': ''}`}>
            <div className="seccion__selected__selected__open" onClick={()=>handleOpen()}>⬅</div>
            {producst.length > 0 ?  producst.map(item=>
              <h1 key={item.id}>{item.img}</h1>)
              : <></>}
          </div>
          <div className={`seccion__selected__black ${toggle? 'seccion__selected-toggle__background': ''}`} onClick={()=>handleClose()}></div>
        </div>
      </div>
    </section>
  )
}

export default App
