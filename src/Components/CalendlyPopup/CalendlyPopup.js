import styles from "./CalendlyPopup.module.css";
import { PopupButton } from "react-calendly";

const CalendlyPopup = ({ text, className = "", style = {} }) => {
  const CalendlyLink = process.env.REACT_APP_CALENDLY_CONNECTION_LINK;

  return (
    <PopupButton
      className={`buttonText regular ${styles.button} ${className}`}
      url={CalendlyLink}
      rootElement={document.getElementById("root")}
      text={text}
    />
  );
};

export default CalendlyPopup;
