import { FILTER, RESET_FILTER } from "../typeActions/filterTypes";

export const filterOnChange = (filter) => ({type: FILTER , payload: filter})
export const resetFilter = () => ({type: RESET_FILTER })