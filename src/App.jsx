import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState([]);

  function passNote(newNote) {
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={passNote} />
      {notes.map((note, index) => {
        return <Note key={uuidv4()} id={index} title={note.title} content={note.content} onDelete={deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
