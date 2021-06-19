import React, { useEffect, useState } from 'react'
import Header from './Header'
import CreateNote from './CreateNode'
import Note from "./Note"
import "./App.css"
function App() {

  const[notes,setNotes]=useState([]);

  useEffect(()=>{
    getNotes();
  },[])

  const getNotes=()=>{
    let noteStorage;
    if(localStorage.getItem("noteStorage")===null){
      noteStorage=[];
    }
    else{
      noteStorage=JSON.parse(localStorage.getItem("noteStorage"));
    }
    setNotes(noteStorage);
  }


  function saveNotes(note){
    let noteStorage;
    if(localStorage.getItem("noteStorage")===null){
      noteStorage=[];
    }
    else{
      noteStorage=JSON.parse(localStorage.getItem("noteStorage"));
    }
    noteStorage.push(note);
    localStorage.setItem("noteStorage",JSON.stringify(noteStorage));
}

const removeNote = (note)=>{
  let noteStorage;
    if(localStorage.getItem("noteStorage")===null){
      noteStorage=[];
    }
    else{
      noteStorage=JSON.parse(localStorage.getItem("noteStorage"));
    }
    
    noteStorage.splice(note,1);
    localStorage.setItem("noteStorage",JSON.stringify(noteStorage));
}

function submit(note){
    setNotes((prevData)=>{
      return [...prevData,note];
    })  
    saveNotes(note);
  };


  const onDelete=(id)=>{
    removeNote(id);
      setNotes((prevData)=>{
        return [...prevData.filter((note,indx)=>indx!==id)]
      })
     

  };

  return (
    <div className="App">
      <Header/>

      <CreateNote passNote={submit}/>

      <div className="notes-div"> 
        {
            notes.map((note,index)=>{
            return <Note id={index}
              key={index}
              title={note.title}
              content={note.content}
              deleteItem={onDelete}
            />
          })
        }
      </div>
    </div>
  );
}

export default App;