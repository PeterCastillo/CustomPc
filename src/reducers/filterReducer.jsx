import { FILTER, RESET_FILTER } from "../typeActions/filterTypes";

export const filterInitialState = {
    filter: ""
}

export function filterReducer( state = filterInitialState , action){
    switch(action.type){
        case (FILTER):{
            return {
                ...state,
                filter: action.payload
            }
        }
        case (RESET_FILTER):{
            console.log(state.filter)
            return {
                ...state,
                filter: ""
            }
        }
        default:{
            return filterInitialState
        }
    }
}