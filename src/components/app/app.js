import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";
import React from "react";

const employeesInfo = [
  {
    fullName: "Koba Kamladze",
    salary: "2400",
    promoted: true,
  },
  {
    fullName: "Vladimer Putani",
    salary: "10",
    promoted: false,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employeesInfo: [
        {
          fullName: "Koba Kamladze",
          salary: "2400",
          promoted: true,
        },
        {
          fullName: "Vladimer Putani",
          salary: "10",
          promoted: false,
        },
      ],
    };
  }

  addEmployee = (e, { fullName, salary, promoted = false }) => {
    e.preventDefault();
    this.state.employeesInfo.push({ fullName, salary, promoted });
  };
  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList employeesInfo={this.state.employeesInfo} />
        <EmployeesAddForm addEmployee={() => this.addEmployee()} />
      </div>
    );
  }
}

export default App;
