//rafce snippet
import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

//props brings in properties from App.js
const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color='green' text='Hello' />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

//check if the property type is valid
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
