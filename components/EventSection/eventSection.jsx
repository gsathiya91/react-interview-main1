import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function EventSection({
  title, date, location, buttons, image, reverse, children
}) {
  return (
    <section className={`${styles["section-wrapper"]} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.textArea}>
        <h2 className={styles["event-title"]}>{title}</h2>
        <div className={styles["event-subinfo"]}>
          <p>{date}</p><br /><br />
          {location?.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>


        {buttons && (
          <div className={styles.buttonSection}>
            {buttons.map((btn, idx) => (
              <a key={idx} href={btn.link} className={styles.buttons}>
                {btn.label} →
              </a>
            ))}
          </div>
        )}

        <div>
          {children}
        </div>
      </div>

      <div className={styles.imageArea}>
        <Image src={image} alt={title} className={styles.image} />
      </div>
    </section>
  );
}
