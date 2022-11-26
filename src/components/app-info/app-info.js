import "./app-info.css";

const AppInfo = ({ totalEmployeesAmount, promotedEmployeesAmount }) => {
  return (
    <div className="app-info">
      <h1>Accounting for employees in the company N</h1>
      <h2>Total amount of employees: {totalEmployeesAmount}</h2>
      <h2>Promoted employees amount: {promotedEmployeesAmount}</h2>
    </div>
  );
};

export default AppInfo;
