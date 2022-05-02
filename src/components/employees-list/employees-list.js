import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const element = data.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => {
          onDelete(id);
        }}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });

  return <ul className="app-list list-group">{element}</ul>;
};

export default EmployeesList;
