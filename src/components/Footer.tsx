import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div>
          <h3>Astro</h3>
          <p>
            This is a demo website to show how the Astro framework works. Visit
            the <a href="https://astro.build">official website</a> to learn
            more.
          </p>
        </div>
        <div>
          <h3>Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
