import React from "react";
import styles from "../../styles/pages/WhatToExpectSection.module.css";

export default function WhatToExpectSection({ data }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.greenCard}>
        <h3 className={styles.title}>What to expect</h3>
        <div className={styles.grid}>
          {data.items.map((item, idx) => (
            <div key={idx} className={styles.item}>
              <div className={styles.icon}></div>
              <p className={styles.whatToExpectContent}>{item.label}</p>
            </div>
          ))}
        </div>
        <div
          className={styles.videoBox}
          dangerouslySetInnerHTML={{ __html: data.video }}
        ></div>

      </div>
    </section>
  );
}
