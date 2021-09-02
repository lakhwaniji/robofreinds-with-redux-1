import {SET_SEARCH_FIELD} from "./constants"

export const setsearchfield=(text)=>({
    type:SET_SEARCH_FIELD,
    payload:text
})