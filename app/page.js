import styles from "./page.module.css";
import Link from "next/link";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>MoodMap</h1>
        <p>
          A self mood tracking journal webapp. Track your mood by being honest
        </p>
        <div>
          <Link href={userId ? "/journal" : "new-user"}>
            <button className={styles.button}>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
