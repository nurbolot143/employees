import { Component } from "react";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      salary: this.props.salary,
    };
  }

  onChangeValue = (e) => {
    const newSalary = parseInt(e.target.value);
    this.setState({ salary: newSalary });

    this.props.onChangeSalary(newSalary);
  };

  render() {
    const { name, onDelete, onToggleProp, increase, rise } = this.props;

    return (
      <li
        className={
          "list-group-item d-flex justify-content-between" +
          (increase ? " increase" : "") +
          (rise ? " like" : "")
        }
      >
        <span
          className="list-group-item-label"
          onClick={onToggleProp}
          data-toggle="rise"
        >
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          value={`${this.state.salary}$`}
          onChange={this.onChangeValue}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={onToggleProp}
            data-toggle="increase"
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
