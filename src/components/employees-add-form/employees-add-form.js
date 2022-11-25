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

  onInputChange = (e) => {
    console.log(e);
    return this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { onAddEmployee } = this.props;

    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form className="add-form d-flex">
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
            placeholder="Salary in $?"
            name="salary"
            onChange={this.onInputChange}
          />

          <button
            type="submit"
            className="btn btn-outline-light"
            onSubmit={onAddEmployee}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
