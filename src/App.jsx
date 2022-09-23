import { Outlet } from "react-router-dom"
import './style/seccion.scss'

function App() {

  return (
    <section className="seccion__container">
      <div className="seccion">
        <span className="seccion__title">Diseña tu propia PC</span>
        <Outlet/>
      </div>
    </section>
  )
}

export default App
