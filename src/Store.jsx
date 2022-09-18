import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
const initalData = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};
const Layer = createContext();
const reducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "LOG_IN":
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};
export default function StorageWrapper(props) {
  return (
    <Layer.Provider value={useReducer(reducer, initalData)}>
      {props.children}
    </Layer.Provider>
  );
}
export const useGetValue = () => useContext(Layer);
