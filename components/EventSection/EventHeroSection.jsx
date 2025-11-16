import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function EventHeroSection({
  title,
  date,
  location,
  buttons,
  image,
}) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.textArea}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.subinfo}>
          <p>{date}</p><br />
          {location.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className={styles.buttonArea}>
          {buttons.map((btn, i) => (
            <a key={i} href={btn.link} className={styles.button} style={{ width: btn.width }}>
              {btn.label} →
            </a>
          ))}
        </div>
      </div>

      <div className={styles.imageArea}>
        <Image src={image} alt={title} className={styles.imageRight} />
      </div>
    </section>
  );
}
