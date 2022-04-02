const themeReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "DARK":
      return { ...state, theme: "light" };
    case "LIGHT":
      return { ...state, theme: "dark" };
    default:
      return state;
  }
};

export { themeReducer };
