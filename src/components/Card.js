import classes from "./Card.module.css";
export default function Card({ item }) {
  return (
    <div className={classes.card}>
      <p>{item.name}</p>
    </div>
  );
}
