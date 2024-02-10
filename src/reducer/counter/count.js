import { INCREMENT, DECREMENT, RESET } from "./actionType";
export const initialCountState = 0;

export function countReducer(state, action) {
  switch (action) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return initialCountState;
    default:
      console.log("This is not valid!");
      return state;
  }
}
