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
            <img className="logos" src={logos} alt="" />
            <img className="logos-small" src={logosSmall} alt="" />
          </div>

          <p className={styles.showcaseDemo}>
            <small>
              This is a demo website used for the YouTube crash course
            </small>
          </p>
        </>
      )}
    </section>
  );
}
