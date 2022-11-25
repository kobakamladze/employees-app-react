import React from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      salary: 0,
    };
  }

  onInputChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmitAddEmployee = (e, localProps) => {
    e.preventDefault();
    return this.props.onAddEmployee({ ...localProps });
  };

  render() {
    const { fullName, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form
          className="add-form d-flex"
          onSubmit={(e) => this.onSubmitAddEmployee(e, { fullName, salary })}
        >
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Enter full name:"
            name="fullName"
            onChange={this.onInputChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in $:"
            name="salary"
            onChange={this.onInputChange}
          />

          <button
            type="submit"
            className="btn btn-outline-light"
            // onSubmit={(e) => onAddEmployee(e)}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
