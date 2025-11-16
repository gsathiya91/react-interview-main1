import React, { useState } from "react";
import styles from "../../styles/pages/FAQSection.module.css";

export default function FAQSection({ data }) {
  const [openIndex, setOpenIndex] = useState(0); 

  const toggleItem = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <p className={styles.eyebrow}>{data.left.eyebrow}</p>
        <h2 className={styles.title}>{data.left.title}</h2>
        <p className={styles.intro}>{data.left.intro}</p>
      </div>

      <div className={styles.right}>
        {data.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
            >
              <button
                type="button"
                className={styles.itemHeader}
                onClick={() => toggleItem(index)}
              >
                <span className={styles.question}>{item.question}</span>

                <span
                  className={`${styles.icon} ${
                    isOpen ? styles.iconOpen : ""
                  }`}
                >
                  ˅
                </span>
              </button>

              {isOpen && (
                <div className={styles.itemBody}>
                  <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
