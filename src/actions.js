import { INCREMENT, DECREASE } from "./actionTypes";

//ACTION = what you want to do

export function incrementAction() {
  return {
    type: INCREMENT
  };
}
export function decreaseAction() {
  return {
    type: DECREASE
  };
}
