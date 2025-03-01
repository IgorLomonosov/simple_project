import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "./NoteCard";

/**
 * Компонент для відображення списку нотаток.
 * 
 * Використовує API для отримання нотаток та відображає їх за допомогою компонента {@link NoteCard}.
 * 
 * @component
 * @example
 * return <NoteList />;
 * 
 * @returns {JSX.Element} - Рендерить список нотаток або повідомлення про відсутність нотаток.
 */
const NoteList = () => {
  const [notes, setNotes] = useState([]);

  /**
   * Завантажує список нотаток з API при монтуванні компонента.
   * 
   * @function
   * @returns {void}
   */
  useEffect(() => {
    axios.get("http://localhost:5000/api/notes")
      .then(response => setNotes(response.data))
      .catch(error => console.error("Помилка завантаження нотаток:", error));
  }, []);

  return (
    <div>
      <h2>Список нотаток</h2>
      {notes.length > 0 ? (
        notes.map(note => (
          <NoteCard key={note._id} title={note.title} content={note.content} />
        ))
      ) : (
        <p>Нотаток немає.</p>
      )}
    </div>
  );
};

export default NoteList;
