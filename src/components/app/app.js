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
      employeesList: [
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

  addEmployee = ({ fullName, salary, promoted = false }) => {
    console.log({ fullName, salary });

    let stateDataClone;
    if (fullName && salary) {
      // Cloning data from state
      stateDataClone = [...this.state.employeesList];
      stateDataClone.push({ fullName, salary, promoted, id: uuid() });
    }

    return this.setState({ employeesList: stateDataClone });
  };

  deleteEmployee = (id) => {
    const deleteCandidateIndex = this.state.employeesList.findIndex(
      (employee) => employee.id === id
    );

    let employeesDuplicate;
    if (deleteCandidateIndex >= 0) {
      // Cloning array to another variable to change state
      employeesDuplicate = [...this.state.employeesList];
      employeesDuplicate.splice(deleteCandidateIndex, 1);
    }

    return this.setState({
      employeesList: employeesDuplicate,
    });
  };

  render() {
    const { employeesList } = this.state;

    const data = employeesList.map((employee) => ({
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
        <EmployeesAddForm onAddEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;
