import { useFilter } from "../../context";
import { Tab, Radiobutton } from "../index";

const Filter = () => {
  const { filterDispatch } = useFilter();
  return (
    <>
      <div className="row flex-spbt filter-wrapper">
        <span className="ft-bolder padding-sm">Difficulty Levels:</span>
        <Tab filter="Easy" type="FILTER_BY_DIFFICULTY" payload="easy" />
        <Tab filter="Medium" type="FILTER_BY_DIFFICULTY" payload="medium" />
        <Tab filter="Hard" type="FILTER_BY_DIFFICULTY" payload="hard" />
      </div>
      <div className="row flex-spbt filter-wrapper">
        <span className="ft-bolder padding-sm">Sort By:</span>
        <Radiobutton
          value={`Ascending`}
          name="sortBy"
          type="SORT"
          payload="ASCENDING"
        />
        <Radiobutton
          value={`Descending`}
          name="sortBy"
          type="SORT"
          payload="DESCENDING"
        />
        <div>
          <button
            className="btn btn-link"
            onClick={() =>
              filterDispatch({
                type: "CLEAR",
              })
            }
          >
            Clear Filter
          </button>
        </div>
      </div>
    </>
  );
};

export { Filter };
