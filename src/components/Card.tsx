import styles from "../styles/Card.module.scss";

interface CardProps {
  title: string;
  body: string;
  dark?: boolean;
}

export default function Card({ title, body, dark = false }: CardProps) {
  return (
    <div className={`${styles.card} ${dark && styles.dark}`}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
