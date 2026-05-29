import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>React Homework-1</h1>

      <div className={css.cards}>
        <Link to="/task-1" className={css.card}>
          Task 1 — Profile
        </Link>

        <Link to="/task-2" className={css.card}>
          Task 2 — Friend List
        </Link>

        <Link to="/task-3" className={css.card}>
          Task 3 — Transactions
        </Link>
      </div>
    </div>
  );
}
