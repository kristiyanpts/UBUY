const reducer = (state, action) => {
  switch (action?.type) {
    case "GET_ALL_REVIEWS":
      return [...action.payload.reviews];
    case "UPDATE_REVIEWS":
      return [...action.payload.reviews];
    case "DELETE_COMMENT":
      //   return state.map((c) =>
      //     c._id === action.payload._id ? { ...c, text: action.payload.text } : c
      //   );
      return state.filter((r) => r._id != action.payload._id);
    default:
      return state;
  }
};

export default reducer;
