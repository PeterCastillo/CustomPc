const Component = ({ item , btn }) => {
    
    const { nombre , precio , img , detalles } = item

    return (
        <div className="components__component">
            <div className="components__component__img">
                <img src={img} alt={nombre} />
            </div>
            <div className="components__component__info">
                <span className="components__component__info__name">{nombre}</span>
                <span className="components__component__info__price">Precio: {precio}</span>
                <button className="components__component__info__btn"><a href={detalles} target="__BLANK">Detalles</a></button>
                <button className="components__component__info__btn">{btn}</button>
            </div>
        </div>
    )
}

export default Component