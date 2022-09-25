import { ADD__COMPONENT, DELETE__COMPONENT } from "../typeActions/selectedComponentsTypes";

export const selectedComponentsInitialState = {
    producst: []
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
            console.log(state.producst)
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