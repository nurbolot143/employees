import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "John", salary: 800, increase: true, rise: false, id: 1 },
        { name: "Alex", salary: 950, increase: false, rise: true, id: 2 },
        { name: "Smit", salary: 2000, increase: false, rise: false, id: 3 },
      ],
      term: "",
      filter: "all",
    };

    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  addItem = (name, salary) => {
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) =>
        item.id === id ? { ...item, [prop]: !item[prop] } : item
      ),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => item.name.indexOf(term) > -1);
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
        break;
      case "moreThen1000":
        return items.filter((item) => parseInt(item.salary) > 1000);
        break;
      default:
        return items;
        break;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  onChangeSalary = (id, salary) => {
    this.setState(({ data }) => ({
      data: data.map((item) => (item.id === id ? { ...item, salary } : item)),
    }));
  };

  render() {
    const { data, term, filter } = this.state;
    const employers = this.state.data.length;
    const increases = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo employers={employers} increases={increases} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onFilterSelect={this.onFilterSelect} filter={filter} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onChangeSalary={this.onChangeSalary}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
