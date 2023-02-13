import logos from "../images/framework-logos.png";
import logosSmall from "../images/framework-logos-small.png";
import styles from "../styles/Showcase.module.scss";

interface ShowcaseProps {
  heading?: string;
  description?: string;
  showExtra?: boolean;
}

export default function Showcase({
  heading = "",
  description = "",
  showExtra = false,
}: ShowcaseProps) {
  return (
    <section className={styles.showcase}>
      <div className={styles.showcaseText}>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>

      {showExtra && (
        <>
          <div className={styles.showcaseImg}>
            <img
              className="logos"
              src={logos}
              alt="Framework Logo"
              width={905}
              height={85}
            />
            <img
              className="logos-small"
              src={logosSmall}
              alt="Framework Logo"
              width={299}
              height={85}
            />
          </div>

          <p className={styles.showcaseDemo}>
            <small>This is an exploration result website using astro</small>
          </p>
        </>
      )}
    </section>
  );
}
