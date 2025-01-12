import ClockHeading from "./compnents/ClockHeading";
import ClockSlogan from "./compnents/ClockSlogan";
import ClockTime from "./compnents/ClockTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <ClockTime />
    </center>
  );
}

export default App;
