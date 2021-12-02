export const reducercount = (state = 0, action) => {
  switch (action.type) {
    case "INCREATE":
      return state + 1;
    case "DECREATE":
      return state - 1;
    default:
      return state;
  }
};
