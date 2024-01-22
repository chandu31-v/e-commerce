import React, { createContext , useReducer } from "react";
import reducer,{initialState} from "./reducer"

const DataContext = createContext()

const Context = (props) => {

    return <>
        <DataContext.Provider value={useReducer(reducer,initialState)}>
            {props.children}
        </DataContext.Provider>
    </>
}

export default Context
export {DataContext}

