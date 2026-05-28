import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/api";
import SearchBox from "../components/SearchBox/SearchBox";
import NoteList from "../components/NoteList/NoteList";
import Profile from "../components/Profile/Profile";
import defaultAvatar from "../images/default-avatar-user.png";

import userData from "../userData.json";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <SearchBox />
      <NoteList />
    </div>
  );
}
