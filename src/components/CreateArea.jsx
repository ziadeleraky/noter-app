import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNoteElements) => {
      return {
        ...prevNoteElements,
        [name]: value,
      };
    });
  }

  function addNote(e) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input name="title" value={note.title} placeholder="Title" onChange={handleChange} />
        <textarea name="content" value={note.content} placeholder="Take a note..." onChange={handleChange} rows="3" />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
