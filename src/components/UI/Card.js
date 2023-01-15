import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={`card ${classes.card}`}>{props.children}</div>;
};
export default Card;
