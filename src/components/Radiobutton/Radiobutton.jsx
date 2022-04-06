import { useFilter } from "../../context";
const Radiobutton = ({ value, name, type, payload }) => {
  const { filterState, filterDispatch } = useFilter();
  console.log(payload, filterState.sortBy);
  return (
    <div className="radiobtn">
      <input
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
        className="label-content heading-button padding-sm"
      >
        {value}
      </label>
    </div>
  );
};

export { Radiobutton };
