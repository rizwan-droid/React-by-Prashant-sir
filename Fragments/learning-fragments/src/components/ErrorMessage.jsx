import PropTypes from "prop-types";

const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h2>I am still hungry</h2>}</>;
};

ErrorMessage.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ErrorMessage;
