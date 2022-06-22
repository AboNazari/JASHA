import { createStore } from "redux";

const joinReducer = (state = { show: false }, action) => {
  if (action.type === "open") {
    return { show: true };
  } else if (action.type === "close") {
    return { show: false };
  }
  return state;
};

const Store = createStore(joinReducer);
export default Store;
