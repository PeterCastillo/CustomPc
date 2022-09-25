import { ADD__COMPONENT, DELETE__COMPONENT } from "../typeActions/selectedComponentsTypes"

export const addComponent = (item) => ({type: ADD__COMPONENT , payload: item})
export const delComponent = () => ({type: DELETE__COMPONENT})