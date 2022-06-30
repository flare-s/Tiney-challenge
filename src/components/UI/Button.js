import styles from "./Button.module.css";
const Button = (props) => {
    let string = ``;
    props.className && props.className.forEach(name =>  string += ` ${styles[name.trim()]}`);
    return (<button className={`${styles.btn} ${string}`} onClick={props.onClick}>
        {props.content}
    </button>);
}

export default Button; 