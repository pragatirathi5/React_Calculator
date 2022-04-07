import styles from "./ClearButton.module.css";

const ClearButton = (props) => {
   return ( 
   <div className={styles["clear-button"]} onClick={props.handleClear}>
   {props.children}
   </div>

   );
};

export default ClearButton;