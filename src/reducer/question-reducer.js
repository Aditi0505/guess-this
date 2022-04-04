const questionReducer = (state, action) => {
  switch (action.type) {
    case "ADDED_QUESTIONS":
      return { questions: [...action.payload] };
    default:
      return state;
  }
};

export { questionReducer };
