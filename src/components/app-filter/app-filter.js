import './app-filter.css';

function AppFilter(props) {
  const buttonsData = [
    { label: 'All employees', filterType: '' },
    { label: 'Employees to promote', filterType: 'onPromote' },
    {
      label: 'Salary more than 1000$',
      filterType: 'withSalaryMoreThanThousand',
    },
  ];

  const buttons = buttonsData.map(({ label, filterType }) => {
    const activeStatus = props.filterType === filterType;
    const classByStatus = activeStatus ? 'btn-light' : 'btn-outline-light';

    return (
      <button
        type="button"
        className={`btn ${classByStatus}`}
        key={filterType}
        onClick={() => props.onFilterTypeChange(filterType)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
}

export default AppFilter;
