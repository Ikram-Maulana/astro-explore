import styles from "../styles/Card.module.scss";

interface CardProps {
  title: string;
  body: string;
}

export default function Card({ title, body }: CardProps) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
