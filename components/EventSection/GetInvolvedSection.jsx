import React from "react";
import styles from "../../styles/pages/GetInvolvedSection.module.css";

export default function GetInvolvedSection({ data }) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{data.title}</h2>

      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label>First name<span>*</span></label>
            <input className={styles.getInvolved} type="text" required />
          </div>

          <div className={styles.field}>
            <label>Last name<span>*</span></label>
            <input className={styles.getInvolved} type="text" required />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Job title<span>*</span></label>
            <input className={styles.getInvolved} type="text" required />
          </div>

          <div className={styles.field}>
            <label>Company name<span>*</span></label>
            <input className={styles.getInvolved} type="text" required />
          </div>
        </div>

        <div className={styles.field}>
          <label>Email<span>*</span></label>
          <input className={styles.getInvolved} type="email" required />
        </div>

        <div className={styles.checkboxGroup}>
          <label>How would you like to get involved?<span>*</span></label>

          {data.checkboxes.map((item, i) => (
            <label key={i} className={styles.checkboxLine}>
              <input className={styles.getInvolved} type="checkbox" />
              {item}
            </label>
          ))}
        </div>

        <div className={styles.field}>
          <label>Leave a message</label>
          <textarea className={styles.message} rows="5"></textarea>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </section>
  );
}
