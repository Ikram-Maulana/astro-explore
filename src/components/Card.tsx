import styles from "../styles/Card.module.scss";

interface CardProps {
  dark?: boolean;
  children: React.ReactNode;
}

export default function Card({ dark = false, children }: CardProps) {
  return (
    <div className={`${styles.card} ${dark && styles.dark}`}>{children}</div>
  );
}
