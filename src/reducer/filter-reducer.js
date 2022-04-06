export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "SORT":
      return { ...state, sortBy: payload };
    case "RATING":
      return { ...state, rating: payload };
    case "FILTER_BY_DIFFICULTY":
      return {
        ...state,
        [payload]: !state[payload],
      };
    case "CLEAR":
      return {
        ...state,
        sortBy: null,
        easy: false,
        medium: false,
        hard: false,
        searchKeyword: "",
      };
    case "FILTER_BY_PRICE":
      return {
        ...state,
        price: payload,
      };
    case "FILTER_BY_SEARCH":
      return {
        ...state,
        searchKeyword: payload,
      };
    default:
      return state;
  }
};
