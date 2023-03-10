import logo from "../images/logo.svg";
import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="index.html">
            <img src={logo} alt="Astro Logo" width={107} height={35} />
          </a>
        </div>
        <nav>
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
        </nav>
      </div>
    </header>
  );
}
