import PropTypes from "prop-types";

function TodoItem({todoName,todoDate}) {

  return (
    <div className="container">
      <div className="row meri-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger meri-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todoName: PropTypes.array.isRequired,
  todoDate: PropTypes.array.isRequired
};


export default TodoItem;
