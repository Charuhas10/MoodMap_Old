import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import styles from "./dashboard.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/journal", label: "Journal" },
  { href: "/history", label: "History" },
];

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.layoutcontainer}>
      <aside className={styles.sidebar}>
        <div>MOOD</div>
        <ul>
          {links.map((link) => (
            <li key={link.href} className={styles.link}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className={styles.userbuttoncontainer}>
        <header className={styles.header}>
          <div className={styles.userbutton}>
            <UserButton />
          </div>
        </header>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
