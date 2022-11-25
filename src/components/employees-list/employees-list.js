import React from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

// function addEmployy({ fullName, salary }) {
//   employeesInfo.push({ fullName, salary });
// }

// const EmployeesList = ({ employeesInfo }) => {
//   const employeesList = employeesInfo.length
//     ? employeesInfo.map(({ fullName, salary, promoted }) => (
//         <EmployeesListItem
//           fullName={fullName}
//           salary={salary}
//           promoted={promoted}
//         />
//       ))
//     : "No employees found.";

//   return <ul className="app-list list-group">{employeesList}</ul>;
// };

class EmployeesList extends React.Component {
  constructor(props) {
    super(props);

    this.employeesInfo = this.props.employeesInfo;
  }

  employeesList = this.props.employeesInfo.length
    ? this.props.employeesInfo.map(({ fullName, salary, promoted }) => (
        <EmployeesListItem
          fullName={fullName}
          salary={salary}
          promoted={promoted}
        />
      ))
    : "No employees found.";

  render() {
    return <ul className="app-list list-group">{this.employeesList}</ul>;
  }
}

export default EmployeesList;
// export { addEmployy };
