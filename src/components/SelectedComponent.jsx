const SelectedComponent = ({ item }) => {

    if(item.hasOwnProperty('marca')){
        return (
        <div className="seccion__build__selected__selected__marca">
            <div className="seccion__build__selected__selected__marca__img">
                <img src={item.img} alt={item.marca} />
            </div>
        </div>
        )
    }

    return (
        <div className="component-selected">
            <div className="component-selected__img">
                <img src={item.img} alt={item.name} />
            </div>
            <div className="component-selected__info">
                <span>{item.nombre}</span>
                <span>Precio: <b>S/{item.precio}</b></span>
            </div>
        </div>
    )
}

export default SelectedComponent