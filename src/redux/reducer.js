const initialState = {
  count: 0,
};

const AppReducer = (state = initialState, action) => {
  console.log("Rajan", action.payload);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: action.payload + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: action.payload - 1,
      };
    default:
      return state;
  }
};

export default AppReducer;
