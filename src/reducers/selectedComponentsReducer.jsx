import { ADD__COMPONENT, DELETE__COMPONENT } from "../typeActions/selectedComponentsTypes";

export const selectedComponentsInitialState = {
    producst: [
        {
            id: 1,
            img: 'https://images.mktw.net/im-473096?width=1280&size=1',
            marca: "INTEL"
        },
        {
            id: 2,
            img: 'https://t7m8e9c8.rocketcdn.me/wp-content/uploads/2016/12/AMD-ryzen-logo.jpg',
            marca: "AMD"
        },
        {
            id:2,
            img : 'https://www.infotec.com.pe/56593-large_default/procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200.jpg',
            nombre : 'PROCESADOR INTEL CORE I3 10100F BX8070110100F 3 6GHZ 6 0MB LGA 1200',
            precio: 329,
            detalles: 'https://www.infotec.com.pe/procesadores/19047-procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200-5032037192620.html'
        },
        {
            id:3,
            img : 'https://www.infotec.com.pe/56593-large_default/procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200.jpg',
            nombre : 'PROCESADOR INTEL CORE I3 10100F BX8070110100F 3 6GHZ 6 0MB LGA 1200',
            precio: 329,
            detalles: 'https://www.infotec.com.pe/procesadores/19047-procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200-5032037192620.html'
        },
        {
            id:1,
            img : 'https://www.infotec.com.pe/56593-large_default/procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200.jpg',
            nombre : 'PROCESADOR INTEL CORE I3 10100F BX8070110100F 3 6GHZ 6 0MB LGA 1200',
            precio: 329,
            detalles: 'https://www.infotec.com.pe/procesadores/19047-procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200-5032037192620.html'
        },
        {
            id:4,
            img : 'https://www.infotec.com.pe/56593-large_default/procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200.jpg',
            nombre : 'PROCESADOR INTEL CORE I3 10100F BX8070110100F 3 6GHZ 6 0MB LGA 1200',
            precio: 329,
            detalles: 'https://www.infotec.com.pe/procesadores/19047-procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200-5032037192620.html'
        },
        {
            id:5,
            img : 'https://www.infotec.com.pe/36916-large_default/procesador-intel-pentium-gold-g5420-bx80684g5420-38ghz-40mb-lga-1151.jpg',
            nombre : 'PROCESADOR INTEL PENTIUM GOLD G5420 (BX80684G5420) 3.8GHZ 4.0MB | LGA 1151',
            precio: 329,
            detalles: 'https://www.infotec.com.pe/procesadores-intel/18108-procesador-intel-pentium-gold-g5420-bx80684g5420-38ghz-40mb-lga-1151-5032037155168.html'
        },
        {
            id:2,
            img : 'https://www.infotec.com.pe/56593-large_default/procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200.jpg',
            nombre : 'PROCESADOR INTEL CORE I3 10100F BX8070110100F 3 6GHZ 6 0MB LGA 1200',
            precio: 329,
            detalles: 'https://www.infotec.com.pe/procesadores/19047-procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200-5032037192620.html'
        },
        {
            id:3,
            img : 'https://www.infotec.com.pe/56593-large_default/procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200.jpg',
            nombre : 'PROCESADOR INTEL CORE I3 10100F BX8070110100F 3 6GHZ 6 0MB LGA 1200',
            precio: 329,
            detalles: 'https://www.infotec.com.pe/procesadores/19047-procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200-5032037192620.html'
        },
        {
            id:1,
            img : 'https://www.infotec.com.pe/56593-large_default/procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200.jpg',
            nombre : 'PROCESADOR INTEL CORE I3 10100F BX8070110100F 3 6GHZ 6 0MB LGA 1200',
            precio: 329,
            detalles: 'https://www.infotec.com.pe/procesadores/19047-procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200-5032037192620.html'
        },
        {
            id:4,
            img : 'https://www.infotec.com.pe/56593-large_default/procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200.jpg',
            nombre : 'PROCESADOR INTEL CORE I3 10100F BX8070110100F 3 6GHZ 6 0MB LGA 1200',
            precio: 329,
            detalles: 'https://www.infotec.com.pe/procesadores/19047-procesador-intel-core-i3-10100f-bx8070110100f-3-6ghz-6-0mb-lga-1200-5032037192620.html'
        },
        {
            id:5,
            img : 'https://www.infotec.com.pe/36916-large_default/procesador-intel-pentium-gold-g5420-bx80684g5420-38ghz-40mb-lga-1151.jpg',
            nombre : 'PROCESADOR INTEL PENTIUM GOLD G5420 (BX80684G5420) 3.8GHZ 4.0MB | LGA 1151',
            precio: 329,
            detalles: 'https://www.infotec.com.pe/procesadores-intel/18108-procesador-intel-pentium-gold-g5420-bx80684g5420-38ghz-40mb-lga-1151-5032037155168.html'
        }
    ]
}

export function selectedComponentsReducer( state = selectedComponentsInitialState , action ) {
    switch(action.type){
        case(ADD__COMPONENT): {
            return {
                ...state,
                producst: [...state.producst, action.payload]
            }
        }
        case(DELETE__COMPONENT):{
            if(state.producst.length > 0) {
                const lastItemID = state.producst[state.producst.length - 1].id
                return {
                ...state,
                producst: state.producst.filter( item => item.id !== lastItemID)
            }
        } else {
            return state
        }
        }
        default:{
            return state
        }
    }

}