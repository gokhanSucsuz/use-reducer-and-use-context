import { useContext } from 'react'

import About from './About'
import { SiteContext } from './context/SiteContext'
import { DECREMENT, INCREMENT, RESET } from './reducer/counter'
import AboutWithNoContext from './AboutWithNoContext'
import AddTodo from './AddTodo'

function App() {

  const {counter: { state, dispatch}} = useContext(SiteContext)
   console.log(state)
  
  return (
    <>
      <div>
        <h2>Count :: {state}</h2>
        <button onClick={() => dispatch(INCREMENT)}>Increment</button>
        <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
        <button onClick={() => dispatch(RESET)}>Reset</button>
        <button onClick={() => dispatch("isNotValid")}>Different Value</button> 
      </div>
      <About />
      <hr />
      <AboutWithNoContext />
      <AddTodo />
    </>
  )
}

export default App
