import "./employees-add-form.css";

const EmployeesAddForm = (props) => {
  return (
    <div className="app-add-form">
      <h3>Add new employee</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Enter full name?"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
        />

        <button
          type="submit"
          className="btn btn-outline-light"
          onClick={props.addEmployee}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
