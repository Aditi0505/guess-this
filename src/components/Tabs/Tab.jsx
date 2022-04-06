import { useFilter } from "../../context";

const Tab = ({ filter, type, payload }) => {
  const { filterState, filterDispatch } = useFilter();
  return (
    <div className="tab-container padding-sm">
      <button
        className={`tab btn btn-ghost-info ${
          filterState[payload] ? "select" : ""
        }`}
        onClick={() =>
          filterDispatch({
            type: type,
            payload: payload,
          })
        }
      >
        <div>{filter}</div>
      </button>
    </div>
  );
};

export { Tab };
