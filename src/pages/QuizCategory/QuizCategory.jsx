import { Card } from "../../components";
import { categories } from "../../data/categories";
const QuizCategory = () => {
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
          <Card title={category.title} image={category.image} key={index + 1} />
        ))}
      </div>
    </div>
  );
};

export { QuizCategory };
