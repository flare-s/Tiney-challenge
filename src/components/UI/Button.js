import styles from "./Button.module.css";
const Button = (props) => {
    let string = ``;
    let classes = props.className.split(" ");
    classes.forEach(name => string += ` ${styles[name]}`);
    return (<button className={`${styles.btn} ${string ? string : ''}`} onClick={props.onClick}>
        {props.content}
    </button>);
}

export default Button; 