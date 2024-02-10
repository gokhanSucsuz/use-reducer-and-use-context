/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { ADD_TODO } from "./reducer/todo"
import { SiteContext } from "./context/SiteContext"
import Todos from "./Todos"

export default function AddTodo(){

    //const [state, dispatch] = useReducer(todoReducer, initial)
    const {todos: {state, dispatch}} = useContext(SiteContext)

    function handleSubmit(event){
        event.preventDefault()
        const inputValue = event.target.elements[0].value
        dispatch({type: ADD_TODO, payload: inputValue})
        event.target.reset()
    }
    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter todo info..." />
            <button type="submit">Add</button>
        </form>
        <Todos />
    </>
}