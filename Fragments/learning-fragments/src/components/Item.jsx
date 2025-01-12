import PropTypes from "prop-types";
import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
    <li className={`list-group-item ${styles["mera-item"]}`}>
      <span className={styles["mera-span"]}>{foodItem}</span>
    </li>
  );
};

Item.propTypes = {
  foodItem: PropTypes.string.isRequired, // Validate that 'fooditem' is an array and is required
};

export default Item;
