export const getSortedCategories = (filterState, categories) => {
  if (filterState.sortBy === "ASCENDING") {
    return [...categories].sort((a, b) =>
      (a.title.includes("Entertainment")
        ? a.title.substring(15).toLowerCase()
        : a.title.toLowerCase()
      ).localeCompare(
        b.title.includes("Entertainment")
          ? b.title.substring(15).toLowerCase()
          : b.title.toLowerCase()
      )
    );
  }
  if (filterState.sortBy === "DESCENDING") {
    return [...categories]
      .sort((a, b) =>
        (a.title.includes("Entertainment")
          ? a.title.substring(15).toLowerCase()
          : a.title.toLowerCase()
        ).localeCompare(
          b.title.includes("Entertainment")
            ? b.title.substring(15).toLowerCase()
            : b.title.toLowerCase()
        )
      )
      .reverse();
  }
  return categories;
};
