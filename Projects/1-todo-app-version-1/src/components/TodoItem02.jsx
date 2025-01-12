function TodoItem02() {
  let todoName = "Go To College";
  let todoDate = "04/10/2024";

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

export default TodoItem02;
