"use client";

import { createNewEntry } from "@/utils/api";
import { useRouter } from "next/navigation";
import styles from "./component.module.css";

const NewEntryCard = () => {
  const router = useRouter();

  const handleOnClick = async () => {
    console.log("hello1");
    const data = await createNewEntry();
    console.log("Data received:", data);
    console.log("hello");
    router.push(`/journal/${data.id}`);
  };

  return (
    <div className={styles.newCardContainer}>
      <div className={styles.newCardClick} onClick={handleOnClick}>
        <span className={styles.newCardSpan}>New Entry</span>
      </div>
    </div>
  );
};
export default NewEntryCard;
