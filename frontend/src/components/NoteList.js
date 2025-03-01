import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "./NoteCard";

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/notes")
      .then(response => setNotes(response.data))
      .catch(error => console.error("Помилка завантаження нотаток:", error));
  }, []);

  return (
    <div>
      <h2>Список нотаток</h2>
      {notes.length > 0 ? (
        notes.map(note => <NoteCard key={note._id} title={note.title} content={note.content} />)
      ) : (
        <p>Нотаток немає.</p>
      )}
    </div>
  );
};

export default NoteList;
