import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
const initalData = 0;
const Layer = createContext();
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "Save":
      return state + 50;
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
