// import { type } from "os";
import { type } from "os";
import { useReducer } from "react";

type CounterState = {
    count : number
}

type UpdateAction = {
    type:'increment' | 'decrement'
    payload:number
}

type ResetAction = {
    type:'reset'
}
type CounterAction = UpdateAction | ResetAction

// type CounterAction = {
//     type:'increment' | 'decrement' |'reset'
//     payload:number
// }
const initialState = {count:0}

function reducer(state:CounterState,action:CounterAction) {
    switch(action.type) {
        case 'increment':
            return {count: state.count + action.payload}
            case 'decrement':
                return {count: state.count - action.payload}
case 'reset':
    return initialState

                default:
                    return state
    }
}

export const counter = () => {
    const[state,dispatch] = useReducer(reducer,initialState)
    return (
        <>
        count:{state.count}
        <button onClick={() => dispatch({type:'increment', payload:10})}
        >Increment 10</button>
        <button onClick={() => dispatch({type:'decrement', payload:10})}>Decrement 10</button>
        <button onClick={() => dispatch ({type:'reset'})}>Reset</button>
        </>
    )
}