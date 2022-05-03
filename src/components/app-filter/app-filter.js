import "./app-filter.css";

const AppFilter = ({ onFilterSelect, filter }) => {
  const buttonsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "rise", label: "На повышение" },
    { name: "moreThen1000", label: "З/П больше 1000$" },
  ];
  return (
    <div className="btn-group">
      {buttonsData.map(({ name, label }) => {
        const active = filter === name;
        const clazz = active ? "btn-light" : "btn-outline-light";

        return (
          <button
            type="button"
            key={name}
            className={`btn ${clazz}`}
            onClick={() => onFilterSelect(name)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default AppFilter;
