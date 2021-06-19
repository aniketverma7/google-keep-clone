import React, { useState } from 'react'
import './CreateNote.css'

function CreateNode(props){
    
    const[note,setNote]=useState({
        title: "",
        content: "",
    });

    function handleEvent(e){
        const{name ,value}=e.target;
        setNote((prevData)=>{
            return {...prevData,
                [name]: value,};
        });
    };
    const addEvent=(event)=>{
        event.preventDefault();
        
        if(note.title ==="" && note.content ===""){
            alert("Empty Fields Not Allowed !");
            return;
        }
            props.passNote(note);
            setNote({
                title: "",
                content: "",
            }) 
    }
    
    return (
        <div className="formDiv">
            <form>
                <input type="text" value={note.title} name="title" onChange={handleEvent} placeholder="Title"/>
                <textarea value={note.content} name="content" onChange={handleEvent} placeholder="Take a note..."/>
                <button onClick={addEvent}>+</button>
            </form>
        </div>
    )
}

export default CreateNode