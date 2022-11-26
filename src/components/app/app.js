import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import uuid from 'react-uuid';

import './app.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employeesList: [
        {
          fullName: 'Koba Kamladze',
          salary: 2400,
          promoted: true,
          liked: false,
          id: uuid(),
        },
        {
          fullName: 'James Hetfield',
          salary: 150000,
          promoted: true,
          liked: true,
          id: uuid(),
        },
        {
          fullName: 'Vladimer Putani',
          salary: 10,
          promoted: false,
          liked: false,
          id: uuid(),
        },
      ],
      term: '',
      filterType: '',
    };
  }

  // Promote employee
  onTogglePromote = id => {
    const promoteCandidateIndex = this.state.employeesList.findIndex(
      employee => employee.id === id
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
  deleteEmployee = id => {
    const deleteCandidateIndex = this.state.employeesList.findIndex(
      employee => employee.id === id
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

  // Search for employees
  onTypeSearch = input => {
    this.setState({ term: input });
  };

  searchData = (data, term) => {
    if (!term) {
      return data;
    }

    const filteredEmployeesList = data.filter(employee => {
      const searchedCandidateName = employee.fullName.toLowerCase();

      if (searchedCandidateName.includes(term.toLowerCase())) {
        return employee;
      }
    });

    return filteredEmployeesList;
  };

  // Filter employees
  onFilterTypeChange = filterValue => {
    this.setState({ filterType: filterValue });
  };

  filterData = (data, filterType) => {
    if (!filterType) return data;

    if (filterType === 'onPromote') {
      return data.filter(employee => employee.promoted);
    }

    if (filterType === 'withSalaryMoreThanThousand') {
      return data.filter(employee => employee.salary >= 1000);
    }
  };

  render() {
    const { employeesList, term, filterType } = this.state;

    // Data to display
    const dataToDisplay = this.filterData(
      this.searchData(employeesList, term),
      filterType
    );

    // All employees amount
    const totalEmployeesAmount = employeesList.length;

    // Only promoted employees amount
    const promotedEmployeesAmount = employeesList.filter(
      ({ promoted }) => promoted
    ).length;

    return (
      <div className="app">
        <AppInfo
          totalEmployeesAmount={totalEmployeesAmount}
          promotedEmployeesAmount={promotedEmployeesAmount}
        />

        <div className="search-panel">
          <SearchPanel onTypeSearch={this.onTypeSearch} />
          <AppFilter
            filterType={filterType}
            onFilterTypeChange={this.onFilterTypeChange}
          />
        </div>

        <EmployeesList
          data={dataToDisplay}
          onDelete={this.deleteEmployee}
          onTogglePromote={this.onTogglePromote}
        />
        <EmployeesAddForm onAddEmployee={this.addEmployee} />
      </div>
    );
  }
}

export default App;
