import { useState } from "react";
import styles from "../styles/Tabs.module.scss";

const data = [
  {
    header: "NPM",
    content: "$ npm create astro@latest",
  },
  {
    header: "PNPM",
    content: "$ pnpm create astro@latest",
  },
  {
    header: "YARN",
    content: "$ yarn create astro",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.tabs}>
      <ul className={styles.tabsHeader}>
        {data.map((d, index) => (
          <li
            key={index}
            className={
              index === activeTab ? styles.tabActive : styles.tabDeactive
            }
            onClick={() => handleTabClick(index)}
          >
            {d.header}
          </li>
        ))}
      </ul>
      <ul className={styles.tabsContent}>
        {data.map((d, index) => (
          <li
            key={index}
            className={
              index === activeTab
                ? styles.contentActive
                : styles.contentDeactive
            }
          >
            <code>{d.content}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}
