import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

// function addEmployy({ fullName, salary }) {
//   employeesInfo.push({ fullName, salary });
// }

const EmployeesList = ({ employeesInfo }) => {
  const employeesList = employeesInfo.length
    ? employeesInfo.map(({ fullName, salary }) => (
        <EmployeesListItem fullName={fullName} salary={salary} />
      ))
    : "No emplyees found.";

  return <ul className="app-list list-group">{employeesList}</ul>;
};

export default EmployeesList;
// export { addEmployy };
