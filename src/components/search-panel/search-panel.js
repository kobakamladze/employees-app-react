import "./search-panel.css";

const SearchPanel = ({ onTypeSearch }) => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      onChange={(e) => onTypeSearch(e.target.value)}
    />
  );
};

export default SearchPanel;
