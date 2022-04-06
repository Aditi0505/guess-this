export const getFilteredCategories = (filterState, categories) => {
  return [...categories].filter((item) =>
    filterState.easy || filterState.medium || filterState.hard
      ? filterState[item.difficulty]
      : true
  );
};
