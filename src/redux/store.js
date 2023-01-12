import { createStore } from "redux";

// Buat counterReducer
const counterState = {
  total: 20,
};

const counterReducer = (state = counterState) => {
  return state;
};

const store = createStore(counterReducer);

export default store;
