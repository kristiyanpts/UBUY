const reducer = (state, action) => {
  switch (action?.type) {
    case "GET_ALL_REVIEWS":
      return [...action.payload.reviews];
    default:
      return state;
  }
};

export default reducer;
