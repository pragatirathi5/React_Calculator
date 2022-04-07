import styles from "./Button.module.css";

const isOperator = (val) => {
console.log(val);
return !isNaN(val) || val==="." || val==="=";
};
const Button =(props)=>{
    return (
        <div
        className={` ${styles["button-wrapper"]} ${
            isOperator (props.children) ? null : styles.operator
            }`}
            onClick={()=>props.handleClick([props.children])}
            >
            {props.children}
        </div>
    );
};

export default Button;