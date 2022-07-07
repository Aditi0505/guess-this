import { useFilter } from "../../context";
const Radiobutton = ({ value, name, type, payload }) => {
  const { filterState, filterDispatch } = useFilter();
  return (
    <div className="tab-container padding-sm">
      <input
        className="radio"
        type="radio"
        id={value}
        name={name}
        onChange={() =>
          filterDispatch({
            type: type,
            payload: payload,
          })
        }
        checked={filterState.sortBy === payload}
      />
      <label
        htmlFor={value}
        className={`label-content heading-button padding-sm ${
          filterState.sortBy === payload ? "select" : ""
        }`}
      >
        {value}
      </label>
    </div>
  );
};

export { Radiobutton };
