const TypeProcesador = ({ item , btn }) => {
    
    const {  img , marca } = item

    return (
        <div className="components__component">
            <div className="components__component__typeImg">
                <img src={img} alt={marca} />
            </div>
            <span className="components__component__typeName">{marca}</span>
            <button className="components__component__typebtn">{btn}</button>
        </div>
    )
}

export default TypeProcesador