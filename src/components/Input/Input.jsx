const Input = ({ inputType, label, placeholder, value, inputHandler }) => {
  return (
    <>
      <label
        htmlFor={inputType}
        className="required-content label-content auth-label ft-bolder"
      >
        {label}
      </label>
      <input
        type={inputType}
        required
        name={inputType}
        id={label.toLowerCase()}
        className="inputBox margin-tb-sm padding-xs input-width"
        placeholder={placeholder}
        value={value}
        onChange={(e) => inputHandler(e, label.toLowerCase())}
      />
    </>
  );
};

export { Input };
