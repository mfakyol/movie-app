import { UPDATE_EXAMPLE } from "./types";

export function updateExample(example) {
  return {
    type: UPDATE_EXAMPLE,
    payload: {
      example,
    },
  };
}

export function getExample(data) {
  return (dispatch) => {
    dispatch(updateExample(data));
  };
}
