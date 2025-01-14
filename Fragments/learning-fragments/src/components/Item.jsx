import PropTypes from "prop-types";
import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li className={`list-group-item ${bought && "active"}`}>
      <span className={styles["mera-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

Item.propTypes = {
  foodItem: PropTypes.string.isRequired,
};

export default Item;
