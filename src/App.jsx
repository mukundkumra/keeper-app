import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes((prevNotes)=>{
      return [...prevNotes, newNote]
    })
  }

  function delNote(id){
    setNotes((prevNotes)=>{
      return prevNotes.filter((items,index)=>{
        return index !== id;
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea callFunc={addNote} />
      {notes.map((note, index)=>(      
        <Note key={index} id={index} title={note.title} content={note.content} callFunc={delNote} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
