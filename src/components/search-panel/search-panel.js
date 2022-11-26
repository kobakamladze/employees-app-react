import "./search-panel.css";

const SearchPanel = ({ onTypeSearch }) => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Search employee:"
      onChange={(e) => onTypeSearch(e.target.value)}
    />
  );
};

export default SearchPanel;
