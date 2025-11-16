import React from "react";
import styles from "../../styles/pages/KeyThemesSection.module.css";

export default function KeyThemesSection({ title, description }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <h2 className={styles.title}>{title}</h2><br />
      </div>

      <div className={styles.right}>
        <p className={styles.description}>{description}</p>
      </div><br />
    </section>
  );
}
