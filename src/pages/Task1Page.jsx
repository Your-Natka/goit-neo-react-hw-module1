import Profile from "../components/Profile/Profile";
import userData from "../userData.json";

import css from "./TaskPage.module.css";

export default function Task1Page() {
  return (
    <Profile
      username={userData.username}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats}
    />
  );
}
