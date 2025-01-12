import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
          />
        ))}
      </div>
    </>
  );
};

TodoItems.propTypes = {
  todoItems: PropTypes.array.isRequired,
};

export default TodoItems;
