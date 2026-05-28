import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/api";
import SearchBox from "../components/SearchBox/SearchBox";
import NoteList from "../components/NoteList/NoteList";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      <SearchBox />
      <NoteList />
    </div>
  );
}
