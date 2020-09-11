import { UPDATE_EXAMPLE } from "../actions/types";

export default function exampleReducer(state = "", action) {
  switch (action.type) {
    case UPDATE_EXAMPLE:
      return action.payload.example;
    default:
      return state;
  }
}
