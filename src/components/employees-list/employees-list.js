import React from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

class EmployeesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const employeesList = this.props?.employeesInfo?.length
      ? this.props.employeesInfo.map(
          ({ fullName, salary, promoted, liked, id }) => (
            <EmployeesListItem
              fullName={fullName}
              salary={salary}
              promoted={promoted}
              liked={liked}
              onDelete={() => this.props.onDelete(id)}
              onTogglePromote={this.props.onTogglePromote}
              key={id}
              id={id}
            />
          )
        )
      : "No employees found.";

    return <ul className="app-list list-group">{employeesList}</ul>;
  }
}

export default EmployeesList;
