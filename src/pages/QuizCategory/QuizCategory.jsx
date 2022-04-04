import { Card } from "../../components";
import { categories } from "../../data/categories";
import { setTitle } from "../../utils";
const QuizCategory = () => {
  const title = "Guess This | Quiz Category";
  setTitle(title);

  return (
    <div className="box">
      <div className="quiz-container flex-center">
        <div className="grid-container flex-spbt">
          <div className="row">
            <h1>Let's Play</h1>
          </div>
        </div>
      </div>
      <div className="category-container flex-spbt">
        {categories.map((category, index) => (
          <Card
            title={category.title}
            image={category.image}
            key={category.id}
            difficulty={category.difficulty}
            categoryNumber={category.categoryNumber}
          />
        ))}
      </div>
    </div>
  );
};

export { QuizCategory };
