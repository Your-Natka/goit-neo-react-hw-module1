import NoteCard from "../NoteCard/NoteCard";

const notes = [
  { id: 1, title: "React" },
  { id: 2, title: "JavaScript" },
  { id: 3, title: "Vite" },
];

export default function NoteList() {
  return (
    <ul>
      {notes.map((note) => (
        <NoteCard key={note.id} title={note.title} />
      ))}
    </ul>
  );
}
