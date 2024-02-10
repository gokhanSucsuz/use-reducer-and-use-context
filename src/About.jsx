import { useContext } from "react"
import { DECREMENT, INCREMENT, RESET} from "./reducer/counter"
import { SiteContext } from "./context/SiteContext"

export default function About(){
    const {counter: { state, dispatch}} = useContext(SiteContext)
    return <>
        <h2>About Page</h2>
        <h2>{state}</h2>
        <button onClick={() => dispatch(INCREMENT)}>Increment</button>
        <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
        <button onClick={() => dispatch(RESET)}>Reset</button>
    </>
}