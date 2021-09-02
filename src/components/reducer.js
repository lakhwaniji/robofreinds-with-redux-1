import { SET_SEARCH_FIELD } from "./constants";

const initialstate={
    searchfield:""
}

export const searchrobots=(state=initialstate,action={})=>{
    switch(action.type){
        case SET_SEARCH_FIELD:
            return Object.assign({},state,{searchfield:action.payload})
        default:
            return state
    }
}