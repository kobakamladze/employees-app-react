import React from "react";

import "./employees-list-item.css";

class EmployeesListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      promoted: this.props.promoted,
      liked: this.props.liked,
    };
  }

  onTogglePromote = (id) => {
    this.setState({ promoted: !this.state.promoted });
    return this.props.onTogglePromote(id);
  };

  onToggleLike = () => this.setState({ liked: !this.state.liked });

  render() {
    const { fullName, salary, id, onDelete } = this.props;
    const { promoted, liked } = this.state;

    let promotionClassName = "list-group-item d-flex justify-content-between";
    if (promoted) promotionClassName += " increase";
    if (liked) promotionClassName += " like";

    return (
      <li className={promotionClassName} id={id}>
        <span
          className="list-group-item-label"
          onClick={() => this.onTogglePromote(id)}
        >
          {fullName}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={`${salary}$`}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={this.onToggleLike}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={() => onDelete(id)}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
