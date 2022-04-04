const questionReducer = (state, action) => {
  switch (action.type) {
    case "ADDED_QUESTIONS":
      return { questions: [{ ...action.payload }, ...state.questions] };
    default:
      return state;
  }
};

export { questionReducer };
