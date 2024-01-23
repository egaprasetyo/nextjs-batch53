// import styles from "./styles.module.css";

import Link from "next/link";

export default function Menu() {
  return (
    <div className="h-12 bg-blue-400 p-4 flex justify-center items-center text-center gap-8 text-lg font-bold">
      <ul className="flex gap-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
}
