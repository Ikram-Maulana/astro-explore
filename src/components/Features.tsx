import Card from "./Card";
import styles from "../styles/Features.module.scss";

const features = [
  {
    title: "Zero JavaScript Runtime",
    body: "Astro renders HTML on the server and strips away any remaining, unused JavaScript.",
  },
  {
    title: "The Power of Islands",
    body: "Need interactive UI? Load individual, non-blocking component islands in parallel.",
  },
  {
    title: "Lazy-Loading Islands",
    body: "Components only hydrate when they scroll into view. If you don't see it, Astro won't load it.",
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={`container ${styles.container}`}>
        {features.map((feature, i) => (
          <Card key={i}>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
