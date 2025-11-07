
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SimpleButton.module.css';

const SimpleButton = ({
  children,
  to,
  href,
  variant = "primary",
  onClick,
  style = {},
  className = "",
  ...rest
}) => {
  // External link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.button} ${styles[variant] || ""} ${className}`}
        style={style}
        {...rest}
      >
        {children}
      </a>
    );
  }
  // Internal app route link
  if (to) {
    return (
      <Link
        to={to}
        className={`${styles.button} ${styles[variant] || ""} ${className}`}
        style={style}
        {...rest}
      >
        {children}
      </Link>
    );
  }
  // Normal button/action
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${styles[variant] || ""} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
};

export default SimpleButton;
