import React, { useState } from "react";
import Header from './components/Header';
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [note,setNote]=useState([]);

  function addNote(inputText){
    const newObject={
      title:inputText.heading,
      content:inputText.noteContent
    }
    setNote(
      (prevData)=>{
        return [...prevData,newObject]
      }
    )
  }

  function deleteNode(id){
    setNote(prevData=> {
      return prevData.filter((item,index) =>{
        return index!==id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote}/>
      {note.map((noteItem,index) => (
        <Note
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          delete={deleteNode}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
