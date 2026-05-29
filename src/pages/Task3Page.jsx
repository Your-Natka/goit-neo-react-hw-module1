import TransactionHistory from "../components/TransactionHistory/TransactionHistory";

import transactions from "../transactions.json";

import css from "./TaskPage.module.css";

export default function Task3Page() {
  return (
    <div className={css.container}>
      <TransactionHistory items={transactions} />
    </div>
  );
}
