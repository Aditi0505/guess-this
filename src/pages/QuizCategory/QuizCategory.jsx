import { Card } from "../../components";
import { categories } from "../../data/categories";
const QuizCategory = () => {
  return (
    <div class="box">
      <div class="quiz-container flex-center">
        <div class="grid-container flex-spbt">
          <div class="row">
            <h1>Let's Play</h1>
          </div>
        </div>
      </div>
      <div class="category-container flex-spbt">
        {categories.map((category) => (
          <Card title={category.title} image={category.image} />
        ))}
      </div>
    </div>
  );
};

export { QuizCategory };
