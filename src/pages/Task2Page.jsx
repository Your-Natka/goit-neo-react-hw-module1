import FriendList from "../components/FriendList/FriendList";
import friends from "../friends.json";

import css from "./TaskPage.module.css";

export default function Task2Page() {
  return <FriendList friends={friends} />;
}
