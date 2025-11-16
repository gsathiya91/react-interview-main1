import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function EventDetailsSection({ image, children }) {
  return (
    <section className={styles.detailsWrapper}>
      <div className={styles.imageArea}>
        <Image src={image} alt="" className={styles.imageLeft} width={1253} height={900} />
      </div>

      <div className={styles.textArea}>
        {children}
      </div>
    </section>
  );
}
