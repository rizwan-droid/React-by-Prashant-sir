import styles from "./Display.module.css";

const display = ({ displayVal }) => {
  return (
    <input className={styles.display} type="text" value={displayVal} readOnly />
  );
};

export default display;
