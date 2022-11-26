import './app-filter.css';

function AppFilter(props) {
  const activateButton = e => {
    const buttonsParent = e.target.parentElement.children;
    for (const button of buttonsParent) {
      button.className = 'btn btn-outline-light';
    }
    console.log(e.target);
    e.target.className = 'btn btn-light';
  };

  const onActionFilter = e =>
    props.onFilterTypeChange(e.target.getAttribute('data-filter'));

  return (
    <div className="btn-group" onClick={e => activateButton(e)}>
      <button
        type="button"
        className="btn btn-light"
        data-filter=""
        onClick={e => onActionFilter(e)}
      >
        All employees
      </button>
      <button
        type="button"
        className="btn btn-outline-light"
        data-filter="onPromote"
        onClick={e => onActionFilter(e)}
      >
        Employees to promote
      </button>
      <button
        type="button"
        className="btn btn-outline-light"
        data-filter="withSalaryMoreThanThousand"
        onClick={e => onActionFilter(e)}
      >
        Salary more than 1000$
      </button>
    </div>
  );
}

export default AppFilter;
