import "bootstrap/dist/css/bootstrap.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

const App = () => {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
};

export default App;
