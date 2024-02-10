import { useReducer } from "react"
import { DECREMENT, INCREMENT, RESET, countReducer, initialCountState} from "./reducer/counter"


export default function AboutWithNoContext(){
    const [count, dispatch] = useReducer(countReducer, initialCountState)
 
    return <>
        <h2>About Page With No Context:::</h2>
        <h2>{count}</h2>
        <button onClick={() => dispatch(INCREMENT)}>Increment</button>
        <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
        <button onClick={() => dispatch(RESET)}>Reset</button>
    </>
}