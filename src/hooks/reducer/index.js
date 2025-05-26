import { useReducer } from "react";

const initialValue = {
  modelNumber: "",
  Price: 0,
};

const useReduce = (state = initialValue, action) => {
  switch (action.type) {
    case "samsung":
      return {
        ...state,
        modelNumber: action.payload.model,
        price: action.payload.price,
      };
    case "unknown":
      return {
        ...state,
      };
    default:
      throw new Error();
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(useReduce, initialValue);
  console.log("state", state);

  return (
    <>
      <h3>{state.modelNumber}</h3>
      <h2>{state.price}</h2>
      <button
        onClick={() => {
          dispatch({
            type: "samsung",
            payload: { model: "Samsung S23", price: 6000 },
          });
        }}
      >
        Click to store
      </button>
    </>
  );
};
export default UseReducer;
