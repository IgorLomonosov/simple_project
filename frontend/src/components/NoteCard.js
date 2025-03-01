import React from "react";

/**
 * Компонент для відображення картки нотатки.
 * 
 * @component
 * @example
 * const note = { title: "Моя нотатка", content: "Текст нотатки" };
 * return <NoteCard title={note.title} content={note.content} />;
 * 
 * @param {Object} props - Властивості компонента.
 * @param {string} props.title - Заголовок нотатки.
 * @param {string} props.content - Вміст нотатки.
 * @returns {JSX.Element} - Рендерить картку з нотаткою.
 */
const NoteCard = ({ title, content }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default NoteCard;
