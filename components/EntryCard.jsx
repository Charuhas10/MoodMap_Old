import styles from "./component.module.css"

const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString();
  return (
    <div className={styles.entrycardContainer}>
      <div className={styles.dateStyle}>{date}</div>
      <div className={styles.summaryStyle}>summary</div>
      <div className={styles.moodStyle}>mood</div>
    </div>
  );
};
export default EntryCard;

// sm:px-6
// sm:px-6
// sm:px-6
