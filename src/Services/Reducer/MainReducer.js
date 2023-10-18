import { combineReducers } from "redux";
import { Cart_Addreducer } from "./Cart_AddReducer";
import { Aunthntication_reducer } from "./AuthticationReducer";


export const mainReducer = combineReducers({
    Cart_Addreducer,
    Aunthntication_reducer
})