import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Procesador from './pages/Procesador'
import ProcesadorType from './pages/ProcesadorType'
import Ram from './pages/Ram'
import Start from './pages/Start'
import TarjetaGrafica from './pages/TarjetaGrafica'
import './style/normalize.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route index element={<Home/>}/>
                    <Route path='buildPc' element={<Start/>}>
                        <Route path='TipoProcesador' index element={<ProcesadorType/>}/>
                        <Route path='Procesador' index element={<Procesador/>}/>
                        <Route path='TarjetaGrafica' index element={<TarjetaGrafica/>}/>
                        <Route path='Ram' index element={<Ram/>}/>
                    </Route>
                </Route>
            </Routes>
        </Provider>
    </BrowserRouter>
)
