export default function SelectInput({
  label,
  defaultSelect,
  data = [],
  handler,
  isMultiple = false,
}) {
  const handleSelection = (selectedValue) => {
    if (isMultiple) {
      // If multiple selection is allowed, update the array of selected values
      if (defaultSelect.includes(selectedValue)) {
        // If value is already selected, remove it
        handler(defaultSelect.filter((val) => val !== selectedValue));
      } else {
        // If value is not selected, add it
        handler([...defaultSelect, selectedValue]);
      }
    } else {
      // If single selection, just set the value
      handler(selectedValue);
    }
  };
  return (
    <>
      <div className="form-style1">
        <label className="heading-color ff-heading fw500 mb10">{label}</label>
        <div className="bootselect-multiselect">
          <div className="dropdown bootstrap-select">
            <button
              type="button"
              className="btn dropdown-toggle btn-light"
              data-bs-toggle="dropdown"
            >
              <div className="filter-option">
                <div className="filter-option-inner">
                  <div className="filter-option-inner-inner">
                    {/* Handle displaying single or multiple selected options */}
                    {isMultiple
                      ? defaultSelect.length > 0
                        ? defaultSelect.join(", ") // Show selected items for multiple
                        : "Select options"
                      : defaultSelect?.value || "Select an option"}{" "}
                    {/* For single */}
                  </div>
                </div>
              </div>
            </button>
            <div className="dropdown-menu">
              <div
                className="inner show"
                style={{
                  maxHeight: "300px",
                  overflowX: "auto",
                }}
              >
                <ul className="dropdown-menu inner show">
                  {data.map((item, i) => (
                    <li key={i}>
                      <a
                        onClick={() => handleSelection(item.value)} // Handle selection
                        className={`dropdown-item ${
                          isMultiple
                            ? defaultSelect.includes(item.value)
                              ? "active selected"
                              : ""
                            : defaultSelect === item.value
                            ? "active selected"
                            : ""
                        }`}
                      >
                        <span className="text">{item.option}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
