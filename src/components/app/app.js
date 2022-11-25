import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import uuid from "react-uuid";

import "./app.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [
        {
          fullName: "Koba Kamladze",
          salary: 2400,
          promoted: true,
          id: uuid(),
        },
        {
          fullName: "Vladimer Putani",
          salary: 10,
          promoted: false,
          id: uuid(),
        },
        {
          fullName: "James Hetfield",
          salary: 150000,
          promoted: false,
          id: uuid(),
        },
      ],
    };
  }

  addEmployee = (e, { fullName, salary, promoted = false }) => {
    console.log(e);
    e.preventDefault();

    const stateDataClone = [...this.state.data];
    stateDataClone.push({ fullName, salary, promoted, id: uuid() });

    return this.setState({ data: stateDataClone });
  };

  deleteEmployee = (id) => {
    const deleteCandidateIndex = this.state.employees.findIndex(
      (employee) => employee.id === id
    );

    // Cloning array to another variable to change state
    const emplyoeesDuplicate = [...this.state.employees];
    emplyoeesDuplicate.splice(deleteCandidateIndex, 1);

    return this.setState({
      employees: emplyoeesDuplicate,
    });
  };

  render() {
    const { employees } = this.state;

    const data = employees.map((employee) => ({
      ...employee,
      key: employee.id,
    }));

    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList employeesInfo={data} onDelete={this.deleteEmployee} />
        <EmployeesAddForm onAddEmployee={() => this.addEmployee()} />
      </div>
    );
  }
}

export default App;
