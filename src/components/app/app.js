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
          liked: false,
          id: uuid(),
        },
        {
          fullName: "James Hetfield",
          salary: 150000,
          promoted: true,
          liked: true,
          id: uuid(),
        },
        {
          fullName: "Vladimer Putani",
          salary: 10,
          promoted: false,
          liked: false,
          id: uuid(),
        },
      ],
    };
  }

  // Promote employee
  onTogglePromote = (id) => {
    const promoteCandidateIndex = this.state.employeesList.findIndex(
      (employee) => employee.id === id
    );

    let dateDataClone;
    if (promoteCandidateIndex >= 0) {
      dateDataClone = [...this.state.employeesList];

      dateDataClone[promoteCandidateIndex].promoted =
        !dateDataClone[promoteCandidateIndex].promoted;

      return this.setState({ employeesList: dateDataClone });
    }
  };

  // Add new employee
  addEmployee = ({ fullName, salary, promoted = false, liked = false }) => {
    let stateDataClone;
    if (fullName && salary) {
      // Cloning data from state
      stateDataClone = [...this.state.employeesList];
      stateDataClone.push({ fullName, salary, promoted, liked, id: uuid() });
    }

    return this.setState({ employeesList: stateDataClone });
  };

  // Delete employee
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

    // All employees amount
    const totalEmployeesAmount = data.length;
    // Only promoted employees amount
    const promotedEmployeesAmount = data.filter(
      ({ promoted }) => promoted
    ).length;

    return (
      <div className="app">
        <AppInfo
          totalEmployeesAmount={totalEmployeesAmount}
          promotedEmployeesAmount={promotedEmployeesAmount}
        />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          employeesInfo={data}
          onDelete={this.deleteEmployee}
          onTogglePromote={this.onTogglePromote}
        />
        <EmployeesAddForm onAddEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;
