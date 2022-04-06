export const getSearchedCategories = (filterState, categories) => {
  return [...categories].filter((item) => {
    const updatedTitle = item.title.includes("Entertainment")
      ? item.title.substring(15)
      : item.title;
    return updatedTitle.toLowerCase().includes(filterState.searchKeyword);
  });
};
