import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css'; // Import CSS Module

const Button = ({ onClick, children, className, type, disabled }) => {
  return (
    <button
      className={`${styles.btn} ${className ? className : ''}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// PropTypes for type-checking
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
  type: 'button', // Default type is 'button'
  disabled: false,
};

export default Button;
