import styles from "./journal.module.css";
import EntryCard from "@/components/EntryCard";
import Question from "@/components/Question";
import NewEntryCard from "@/components/NewEntryCard";
import Link from "next/link";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { analyse } from "@/utils/ai";

const getEntries = async () => {
  const user = await getUserByClerkId();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return entries;
};

const JournalPage = async () => {
  const entries = await getEntries();
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Mood Entries</h2>
      <div className={styles.questionContainer}>
        <Question />
      </div>
      <div className={styles.cardContainer}>
        <NewEntryCard />
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard key={entry.id} entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
