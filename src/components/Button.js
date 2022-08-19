import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      //onClick is a prop from App!
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelBlue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  click: PropTypes.func,
};

export default Button;
