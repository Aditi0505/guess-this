import { useLocation } from "react-router-dom";
import { Card, Filter } from "../../components";
import { useFilter } from "../../context";
import { categories } from "../../data/categories";
import {
  getSortedCategories,
  getSearchedCategories,
  getFilteredCategories,
  setTitle,
} from "../../utils";
const QuizCategory = () => {
  const title = "Guess This | Quiz Category";
  setTitle(title);
  const { filterState } = useFilter();
  const searchedCategories = getSearchedCategories(filterState, categories);
  const filteredCategories = getFilteredCategories(
    filterState,
    searchedCategories
  );
  const sortedCategories = getSortedCategories(filterState, filteredCategories);
  const location = useLocation();
  return (
    <div className="box">
      <div className="quiz-container flex-center">
        <div className="grid-container flex-spbt quiz-box">
          <div className="row">
            <h1 className="heading-accent category-heading">Let's Play</h1>
          </div>
          <Filter />
        </div>
      </div>
      <div className="category-container flex-center">
        {sortedCategories.length > 0 ? (
          sortedCategories.map((category) => (
            <Card
              title={category.title}
              image={category.image}
              key={category.id}
              difficulty={category.difficulty}
              categoryNumber={category.categoryNumber}
              location={location}
            />
          ))
        ) : (
          <div className="ft-bolder text-lg">No Category Found!</div>
        )}
      </div>
    </div>
  );
};

export { QuizCategory };
